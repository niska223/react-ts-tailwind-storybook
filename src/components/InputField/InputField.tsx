import React, { useState } from 'react';
import clsx from 'clsx';

export interface InputFieldProps {
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  placeholder?: string;
  helperText?: string;
  errorMessage?: string;
  disabled?: boolean;
  invalid?: boolean;
  loading?: boolean;
  variant?: 'filled' | 'outlined' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  type?: string;
  clearable?: boolean;
  passwordToggle?: boolean;
  className?: string;
}

const sizeClasses = {
  sm: 'text-sm py-1 px-2',
  md: 'text-base py-2 px-3',
  lg: 'text-lg py-3 px-4',
};

const variantClasses = {
  filled: 'bg-gray-100 dark:bg-gray-800 border border-transparent focus:border-blue-500',
  outlined: 'bg-transparent border border-gray-300 dark:border-gray-700 focus:border-blue-500',
  ghost: 'bg-transparent border-none focus:ring-2 focus:ring-blue-500',
};

export const InputField: React.FC<InputFieldProps> = ({
  value,
  onChange,
  label,
  placeholder,
  helperText,
  errorMessage,
  disabled,
  invalid,
  loading,
  variant = 'outlined',
  size = 'md',
  type = 'text',
  clearable = false,
  passwordToggle = false,
  className,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [internalValue, setInternalValue] = useState(value || '');

  const isControlled = value !== undefined;
  const inputValue = isControlled ? value : internalValue;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!isControlled) setInternalValue(e.target.value);
    onChange?.(e);
  };

  const handleClear = () => {
    if (!isControlled) setInternalValue('');
    onChange?.({
      target: { value: '' },
    } as React.ChangeEvent<HTMLInputElement>);
  };

  const inputType = passwordToggle ? (showPassword ? 'text' : 'password') : type;

  return (
    <div className={clsx('flex flex-col gap-1 w-full', className)}>
      {label && (
        <label className="font-medium text-gray-700 dark:text-gray-200 mb-1">{label}</label>
      )}
      <div className={clsx('relative flex items-center', disabled && 'opacity-60 pointer-events-none')}>
        <input
          type={inputType}
          value={inputValue}
          onChange={handleChange}
          placeholder={placeholder}
          disabled={disabled || loading}
          aria-invalid={invalid}
          aria-label={label || placeholder}
          className={clsx(
            'transition-all rounded-md outline-none w-full',
            sizeClasses[size],
            variantClasses[variant],
            invalid && 'border-red-500 focus:border-red-500',
            loading && 'pr-10',
            'dark:text-white',
          )}
        />
        {clearable && inputValue && !disabled && !loading && (
          <button
            type="button"
            aria-label="Clear input"
            className="absolute right-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
            onClick={handleClear}
            tabIndex={-1}
          >
            ×
          </button>
        )}
        {passwordToggle && type === 'password' && (
          <button
            type="button"
            aria-label={showPassword ? 'Hide password' : 'Show password'}
            className="absolute right-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
            onClick={() => setShowPassword((v) => !v)}
            tabIndex={-1}
          >
            {showPassword ? '🙈' : '👁️'}
          </button>
        )}
        {loading && (
          <span className="absolute right-2 animate-spin text-blue-500">⏳</span>
        )}
      </div>
      {helperText && !invalid && (
        <span className="text-xs text-gray-500 dark:text-gray-400">{helperText}</span>
      )}
      {invalid && errorMessage && (
        <span className="text-xs text-red-500">{errorMessage}</span>
      )}
    </div>
  );
};

export default InputField;
