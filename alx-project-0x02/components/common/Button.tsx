// components/common/Button.tsx
import React from 'react';
import { type ButtonProps } from '@/interfaces';

const sizeClasses = {
  small: 'px-2 py-1 text-sm',
  medium: 'px-4 py-2 text-base',
  large: 'px-6 py-3 text-lg',
};

const shapeClasses = {
  'rounded-sm': 'rounded-sm',
  'rounded-md': 'rounded-md',
  'rounded-full': 'rounded-full',
};

const Button: React.FC<ButtonProps> = ({
  title,
  size = 'medium',
  shape = 'rounded-md',
  className = '',
  ...rest
}) => {
  const base = 'bg-blue-600 text-white hover:bg-blue-700 transition-colors';
  const finalClass = `${base} ${sizeClasses[size]} ${shapeClasses[shape]} ${className}`;

  return (
    <button className={finalClass} {...rest}>
      {title}
    </button>
  );
};

export default Button;
