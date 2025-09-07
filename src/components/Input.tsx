import React from 'react';
import classNames from 'classnames';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

const Input: React.FC<InputProps> = ({ label, error, className, ...props }) => (
  <div className="mb-4">
    {label && <label className="block mb-1 font-medium text-gray-700 dark:text-gray-200">{label}</label>}
    <input
      className={classNames(
        'w-full px-3 py-2 border rounded focus:outline-none focus:ring transition',
        'bg-white dark:bg-gray-800 text-gray-900 dark:text-white',
        {
          'border-red-500 focus:ring-red-500': error,
          'border-gray-300 focus:ring-blue-500 dark:border-gray-600': !error,
        },
        className
      )}
      {...props}
    />
    {error && <span className="text-red-500 text-sm mt-1">{error}</span>}
  </div>
);

export default Input;

