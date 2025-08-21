import { DataTable, DataTableProps, Column } from './DataTable';
import type { Meta, StoryObj } from '@storybook/react-webpack5';

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

const meta: Meta<DataTableProps<User>> = {
  title: 'Components/DataTable',
  component: DataTable,
  tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<DataTableProps<User>>;

export const Basic: Story = {
  args: {
    data,
    columns,
    loading: false,
    selectable: true,
  },
};

export const Loading: Story = {
  args: {
    data: [],
    columns,
    loading: true,
    selectable: false,
  },
};

export const Empty: Story = {
  args: {
    data: [],
    columns,
    loading: false,
    selectable: false,
  },
};
