import React, { useState } from 'react';
import { DataTable, Column } from '../components/DataTable/DataTable';

type User = { id: number; name: string; email: string; role: string };

const columns: Column<User>[] = [
  { key: 'name', title: 'Name', dataIndex: 'name', sortable: true },
  { key: 'email', title: 'Email', dataIndex: 'email', sortable: true },
  { key: 'role', title: 'Role', dataIndex: 'role' },
];

const data: User[] = [
  { id: 1, name: 'Alice', email: 'alice@example.com', role: 'Admin' },
  { id: 2, name: 'Bob', email: 'bob@example.com', role: 'User' },
  { id: 3, name: 'Charlie', email: 'charlie@example.com', role: 'User' },
];

export default function DataTableDemo() {
  const [selected, setSelected] = useState<User[]>([]);
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-indigo-50 via-purple-50 to-blue-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 px-4 py-10 animate-fade-in">
      <div className="max-w-2xl w-full bg-white dark:bg-gray-900 rounded-2xl shadow-2xl p-8 border border-indigo-100 dark:border-gray-800 animate-fade-in-up">
        <div className="mb-8 text-center">
          <span className="text-6xl animate-bounce">📊</span>
          <h1 className="text-3xl font-extrabold text-indigo-700 dark:text-indigo-300 mb-2 mt-2 tracking-tight">DataTable Component Demo</h1>
          <p className="text-gray-600 dark:text-gray-400 text-base mb-2">Sortable, selectable, and responsive data table for modern UIs.</p>
          <div className="flex flex-wrap justify-center gap-2 mt-2 text-xs text-indigo-700 dark:text-indigo-200">
            <span className="bg-indigo-50 dark:bg-indigo-900/30 rounded px-2 py-1">Column Sorting</span>
            <span className="bg-indigo-50 dark:bg-indigo-900/30 rounded px-2 py-1">Row Selection</span>
            <span className="bg-indigo-50 dark:bg-indigo-900/30 rounded px-2 py-1">Loading/Empty States</span>
            <span className="bg-indigo-50 dark:bg-indigo-900/30 rounded px-2 py-1">Accessible</span>
            <span className="bg-indigo-50 dark:bg-indigo-900/30 rounded px-2 py-1">Responsive</span>
          </div>
        </div>
        <section className="rounded-lg bg-indigo-50 dark:bg-gray-800/60 p-4 shadow hover:shadow-md transition">
          <DataTable
            data={data}
            columns={columns}
            loading={false}
            selectable
            onRowSelect={setSelected}
          />
        </section>
        <div className="mt-4 text-sm text-gray-600 dark:text-gray-300 text-center">
          <span className="font-semibold">Selected:</span> {selected.map(u => u.name).join(', ') || 'None'}
        </div>
        <div className="mt-10 text-center">
          <a href="/" className="inline-block text-indigo-600 dark:text-indigo-300 hover:underline text-sm font-medium transition">← Back to Home</a>
        </div>
      </div>
    </div>
  );
}
