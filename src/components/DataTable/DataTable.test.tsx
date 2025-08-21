import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { DataTable, Column } from './DataTable';

type User = { id: number; name: string; email: string; role: string };

const columns: Column<User>[] = [
  { key: 'name', title: 'Name', dataIndex: 'name', sortable: true },
  { key: 'email', title: 'Email', dataIndex: 'email', sortable: true },
  { key: 'role', title: 'Role', dataIndex: 'role' },
];

const data: User[] = [
  { id: 1, name: 'Alice', email: 'alice@example.com', role: 'Admin' },
  { id: 2, name: 'Bob', email: 'bob@example.com', role: 'User' },
];

describe('DataTable', () => {
  it('renders table headers and data', () => {
    render(<DataTable data={data} columns={columns} />);
    expect(screen.getByText('Name')).toBeInTheDocument();
    expect(screen.getByText('Alice')).toBeInTheDocument();
  });

  it('shows loading state', () => {
    render(<DataTable data={[]} columns={columns} loading />);
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  it('shows empty state', () => {
    render(<DataTable data={[]} columns={columns} />);
    expect(screen.getByText('No data available')).toBeInTheDocument();
  });

  it('calls onRowSelect when row is clicked', () => {
    const handleSelect = jest.fn();
    render(<DataTable data={data} columns={columns} selectable onRowSelect={handleSelect} />);
    fireEvent.click(screen.getAllByRole('checkbox')[0]);
    expect(handleSelect).toHaveBeenCalled();
  });
});
