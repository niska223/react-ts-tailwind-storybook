import React from 'react';
import { Routes, Route } from 'react-router-dom';
import InputFieldDemo from './examples/InputFieldDemo';
import DataTableDemo from './examples/DataTableDemo';

function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 px-4 py-10 animate-fade-in">
      <div className="text-center mb-12">
        <span className="text-7xl mb-4 block animate-bounce">🎨</span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-300 dark:to-indigo-400 tracking-tight mb-4">
          React UI Components Assignment
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
          Build and showcase reusable components with <b>React</b>, <b>TypeScript</b>, and <b>TailwindCSS</b>.<br/>
          <span className="text-sm text-gray-400">Includes Storybook documentation and interactive demos.</span>
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 w-full max-w-5xl mb-12">
        {/* InputField Card */}
        <div className="group rounded-2xl border border-blue-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2 p-8 flex flex-col items-center text-center cursor-pointer relative overflow-hidden">
          <span className="text-5xl mb-3 group-hover:scale-110 transition-transform">🔤</span>
          <h2 className="text-2xl font-bold text-blue-700 dark:text-blue-300 mb-2">InputField Demo</h2>
          <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 max-w-xs">A flexible input component with validation states, sizes, variants, and accessibility.</p>
          <ul className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xs text-left mb-4 text-blue-600 dark:text-blue-200">
            <li> Validation & error states</li>
            <li> Variants: filled, outlined, ghost</li>
            <li> Sizes: sm, md, lg</li>
            <li> Clear & password toggle</li>
            <li> Accessible & responsive</li>
          </ul>
          <a href="/input-demo" className="px-6 py-2.5 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold shadow hover:from-blue-700 hover:to-indigo-700 transition group-hover:scale-105">🚀 Try InputField</a>
          <div className="absolute inset-0 pointer-events-none group-hover:bg-blue-50/40 group-hover:dark:bg-blue-900/10 transition" />
        </div>
        {/* DataTable Card */}
        <div className="group rounded-2xl border border-indigo-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2 p-8 flex flex-col items-center text-center cursor-pointer relative overflow-hidden">
          <span className="text-5xl mb-3 group-hover:scale-110 transition-transform">📊</span>
          <h2 className="text-2xl font-bold text-indigo-700 dark:text-indigo-300 mb-2">DataTable Demo</h2>
          <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 max-w-xs">A responsive table with sorting, row selection, empty/loading states, and accessibility.</p>
          <ul className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xs text-left mb-4 text-indigo-600 dark:text-indigo-200">
            <li> Column sorting</li>
            <li> Row selection</li>
            <li> Loading & empty states</li>
            <li> Accessible & responsive</li>
          </ul>
          <a href="/table-demo" className="px-6 py-2.5 rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold shadow hover:from-indigo-700 hover:to-purple-700 transition group-hover:scale-105">🚀 Try DataTable</a>
          <div className="absolute inset-0 pointer-events-none group-hover:bg-indigo-50/40 group-hover:dark:bg-indigo-900/10 transition" />
        </div>
      </div>
      <div className="text-center">
        <a href="http://localhost:6006" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-blue-300 text-blue-700 dark:text-blue-200 bg-blue-50 dark:bg-gray-800 font-medium hover:bg-blue-100 hover:shadow transition text-sm">
          📚 View Storybook Docs
        </a>
        <p className="mt-3 text-xs text-gray-400 dark:text-gray-500">💡 Tip: Hover cards for features, try the demos, then dive into Storybook for docs & test cases.</p>
      </div>
    </div>
  );
}

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/input-demo" element={<InputFieldDemo />} />
      <Route path="/table-demo" element={<DataTableDemo />} />
    </Routes>
  );
}
