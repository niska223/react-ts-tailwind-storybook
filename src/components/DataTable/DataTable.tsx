import React, { useState } from 'react';

export interface Column<T> {
  key: string;
  title: string;
  dataIndex: keyof T;
  sortable?: boolean;
}

export interface DataTableProps<T> {
  data: T[];
  columns: Column<T>[];
  loading?: boolean;
  selectable?: boolean;
  onRowSelect?: (selectedRows: T[]) => void;
}

export function DataTable<T extends { [key: string]: any }>({
  data,
  columns,
  loading = false,
  selectable = false,
  onRowSelect,
}: DataTableProps<T>) {
  const [sortKey, setSortKey] = useState<string | null>(null);
  const [sortAsc, setSortAsc] = useState(true);
  const [selectedRows, setSelectedRows] = useState<T[]>([]);

  const handleSort = (col: Column<T>) => {
    if (!col.sortable) return;
    if (sortKey === col.key) {
      setSortAsc(!sortAsc);
    } else {
      setSortKey(col.key);
      setSortAsc(true);
    }
  };

  const sortedData = React.useMemo(() => {
    if (!sortKey) return data;
    const col = columns.find((c) => c.key === sortKey);
    if (!col) return data;
    return [...data].sort((a, b) => {
      if (a[col.dataIndex] < b[col.dataIndex]) return sortAsc ? -1 : 1;
      if (a[col.dataIndex] > b[col.dataIndex]) return sortAsc ? 1 : -1;
      return 0;
    });
  }, [data, sortKey, sortAsc, columns]);

  const handleSelectRow = (row: T) => {
    let newSelected;
    if (selectedRows.includes(row)) {
      newSelected = selectedRows.filter((r) => r !== row);
    } else {
      // Only single selection supported (per prop type)
      newSelected = [row];
    }
    setSelectedRows(newSelected);
    onRowSelect?.(newSelected);
  };

  const isRowSelected = (row: T) => selectedRows.includes(row);

  return (
    <div className="overflow-x-auto rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 shadow">
      <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
        <thead className="bg-gray-50 dark:bg-gray-800">
          <tr>
            {selectable && <th className="p-3"></th>}
            {columns.map((col) => (
              <th
                key={col.key}
                className="p-3 text-left font-semibold text-gray-700 dark:text-gray-200 cursor-pointer select-none"
                onClick={() => handleSort(col)}
                aria-sort={sortKey === col.key ? (sortAsc ? 'ascending' : 'descending') : 'none'}
                scope="col"
              >
                {col.title}
                {col.sortable && (
                  <span className="ml-1 text-xs">
                    {sortKey === col.key ? (sortAsc ? '▲' : '▼') : '↕'}
                  </span>
                )}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {loading ? (
            <tr>
              <td colSpan={columns.length + (selectable ? 1 : 0)} className="p-6 text-center text-blue-500">
                Loading...
              </td>
            </tr>
          ) : sortedData.length === 0 ? (
            <tr>
              <td colSpan={columns.length + (selectable ? 1 : 0)} className="p-6 text-center text-gray-400">
                No data available
              </td>
            </tr>
          ) : (
            sortedData.map((row, i) => (
              <tr
                key={i}
                className={
                  'hover:bg-blue-50 dark:hover:bg-gray-800 transition ' +
                  (isRowSelected(row) ? 'bg-blue-100 dark:bg-gray-700' : '')
                }
                aria-selected={isRowSelected(row)}
                onClick={selectable ? () => handleSelectRow(row) : undefined}
                tabIndex={selectable ? 0 : -1}
              >
                {selectable && (
                  <td className="p-3">
                    <input
                      type="checkbox"
                      checked={isRowSelected(row)}
                      onChange={() => handleSelectRow(row)}
                      aria-label="Select row"
                      className="accent-blue-500"
                    />
                  </td>
                )}
                {columns.map((col) => (
                  <td key={col.key} className="p-3 text-gray-800 dark:text-gray-100">
                    {String(row[col.dataIndex])}
                  </td>
                ))}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default DataTable;
