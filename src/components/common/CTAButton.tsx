// src/components/common/CTAButton.tsx
'use client';

import Link from 'next/link';
import React from 'react';

interface CTAButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  external?: boolean;
  onClick?: () => void;
}

export const CTAButton: React.FC<CTAButtonProps> = ({
  href,
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  external = false,
  onClick,
}) => {
  const baseClasses = 'font-semibold rounded-lg transition-all duration-200 inline-block';

  const sizeClasses = {
    sm: 'py-2 px-4 text-sm',
    md: 'py-3 px-6 text-base',
    lg: 'py-4 px-8 text-lg',
  };

  const variantClasses = {
    primary: 'bg-accent-500 hover:bg-accent-600 text-white',
    secondary: 'bg-primary-700 hover:bg-primary-600 text-primary-50',
    outline: 'border-2 border-accent-500 text-accent-400 hover:bg-accent-500 hover:text-white',
  };

  const classes = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`;

  if (external) {
    return (
      <a
        href={href}
        className={classes}
        target="_blank"
        rel="noopener noreferrer"
        onClick={onClick}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} onClick={onClick}>
      {children}
    </Link>
  );
};
