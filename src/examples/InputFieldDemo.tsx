import React, { useState } from 'react';
import { InputField } from '../components/InputField/InputField';

export default function InputFieldDemo() {
  const [value, setValue] = useState('');
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 px-4 py-10 animate-fade-in">
      <div className="max-w-lg w-full bg-white dark:bg-gray-900 rounded-2xl shadow-2xl p-8 border border-blue-100 dark:border-gray-800 animate-fade-in-up">
        <div className="mb-8 text-center">
          <span className="text-6xl animate-bounce">🔤</span>
          <h1 className="text-3xl font-extrabold text-blue-700 dark:text-blue-300 mb-2 mt-2 tracking-tight">InputField Component Demo</h1>
          <p className="text-gray-600 dark:text-gray-400 text-base mb-2">Flexible, accessible, and beautiful input fields with validation, variants, and more.</p>
          <div className="flex flex-wrap justify-center gap-2 mt-2 text-xs text-blue-600 dark:text-blue-200">
            <span className="bg-blue-50 dark:bg-blue-900/30 rounded px-2 py-1">Validation</span>
            <span className="bg-blue-50 dark:bg-blue-900/30 rounded px-2 py-1">Variants</span>
            <span className="bg-blue-50 dark:bg-blue-900/30 rounded px-2 py-1">Sizes</span>
            <span className="bg-blue-50 dark:bg-blue-900/30 rounded px-2 py-1">Clearable</span>
            <span className="bg-blue-50 dark:bg-blue-900/30 rounded px-2 py-1">Password Toggle</span>
            <span className="bg-blue-50 dark:bg-blue-900/30 rounded px-2 py-1">Accessible</span>
          </div>
        </div>
        <div className="space-y-6">
          <section className="rounded-lg bg-blue-50 dark:bg-gray-800/60 p-4 shadow hover:shadow-md transition">
            <InputField
              label="Username"
              placeholder="Enter your username"
              value={value}
              onChange={e => setValue(e.target.value)}
              helperText="This is a helper text"
              variant="outlined"
              size="md"
              clearable
            />
          </section>
          <section className="rounded-lg bg-blue-50 dark:bg-gray-800/60 p-4 shadow hover:shadow-md transition">
            <InputField
              label="Password"
              placeholder="Enter your password"
              type="password"
              passwordToggle
              variant="filled"
              size="md"
            />
          </section>
          <section className="rounded-lg bg-blue-50 dark:bg-gray-800/60 p-4 shadow hover:shadow-md transition">
            <InputField
              label="Email"
              placeholder="Enter your email"
              errorMessage="Invalid email"
              invalid
              variant="filled"
              size="md"
            />
          </section>
          <section className="rounded-lg bg-blue-50 dark:bg-gray-800/60 p-4 shadow hover:shadow-md transition">
            <InputField
              label="Disabled"
              placeholder="Disabled input"
              disabled
              variant="ghost"
              size="md"
            />
          </section>
          <section className="rounded-lg bg-blue-50 dark:bg-gray-800/60 p-4 shadow hover:shadow-md transition">
            <InputField
              label="Loading"
              placeholder="Loading input"
              loading
              variant="outlined"
              size="md"
            />
          </section>
        </div>
        <div className="mt-10 text-center">
          <a href="/" className="inline-block text-blue-600 dark:text-blue-300 hover:underline text-sm font-medium transition">← Back to Home</a>
        </div>
      </div>
    </div>
  );
}
