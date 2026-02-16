import Link from 'next/link';
import { ReactNode } from 'react';

interface ButtonProps {
  href?: string;
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'custom';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

export function Button({
  href,
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  type = 'button',
  disabled = false,
}: ButtonProps) {
  const baseStyles =
    'group inline-flex items-center justify-center gap-2 font-semibold rounded-2xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 shadow-xl hover:shadow-2xl transform hover:-translate-y-1';

  const variantStyles = {
    primary:
      'bg-primary hover:bg-white text-white hover:text-primary hover:border-primary border-2 border-primary focus:ring-primary-500 shadow-xl hover:shadow-primary/25',
    secondary:
      'bg-white/50 backdrop-blur-sm border-2 border-gray-200/50 text-secondary hover:bg-gray-100 hover:border-gray-300 focus:ring-gray-500',
    outline:
      'bg-white/10 backdrop-blur-sm focus:ring-primary-500 text-primary border-2 border-primary',
  };

  const sizeStyles = {
    sm: 'px-6 py-3 text-sm',
    md: 'px-8 py-4 text-base',
    lg: 'px-10 py-5 text-lg',
  };

  const disabledStyles = disabled ? 'opacity-50 cursor-not-allowed' : '';

  const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${disabledStyles} ${className}`;

  if (href && !disabled) {
    return (
      <Link href={href} className={combinedClassName}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={combinedClassName}
    >
      {children}
    </button>
  );
}
