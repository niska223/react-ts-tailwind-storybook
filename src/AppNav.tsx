import React from 'react';
import { Link } from 'react-router-dom';

export default function AppNav() {
  return (
    <nav className="w-full flex justify-center gap-8 py-4 bg-white dark:bg-gray-900 shadow">
      <Link to="/" className="font-semibold text-blue-700 dark:text-blue-300 hover:underline">Home</Link>
      <Link to="/input-demo" className="font-semibold text-blue-700 dark:text-blue-300 hover:underline">InputField Demo</Link>
      <Link to="/table-demo" className="font-semibold text-blue-700 dark:text-blue-300 hover:underline">DataTable Demo</Link>
    </nav>
  );
}
