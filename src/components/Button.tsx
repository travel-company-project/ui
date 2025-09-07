import React from 'react';
import classNames from 'classnames';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  loading?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  loading = false,
  className,
  ...props
}) => {
  return (
    <button
      className={classNames(
        'px-4 py-2 rounded font-semibold transition-all duration-300 focus:outline-none transform hover:scale-105 active:scale-95',
        'hover-lift hover-glow relative overflow-hidden',
        {
          'bg-blue-600 text-white hover:bg-blue-700 shadow-lg hover:shadow-xl': variant === 'primary',
          'bg-gray-200 text-gray-900 hover:bg-gray-300 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600 shadow-md hover:shadow-lg': variant === 'secondary',
          'border border-blue-600 text-blue-600 bg-transparent hover:bg-blue-50 dark:hover:bg-blue-900 hover:border-blue-700': variant === 'outline',
          'opacity-50 cursor-not-allowed pointer-events-none': loading,
        },
        className
      )}
      disabled={loading || props.disabled}
      {...props}
    >
      {loading && (
        <span className="absolute inset-0 flex items-center justify-center">
          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
        </span>
      )}
      <span className={loading ? 'opacity-0' : 'opacity-100 transition-opacity duration-300'}>
        {children}
      </span>
    </button>
  );
};

export default Button;
