import React from 'react';
import { ButtonProps } from '../../features/calculator/types';
import styles from './Button.module.css';

export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  variant = 'default',
  className = '',
}) => {
  const getVariantClass = () => {
    switch (variant) {
      case 'clear':
        return styles.clear;
      case 'equals':
        return styles.equals;
      case 'operator':
        return styles.operator;
      case 'delete':
        return styles.delete;
      default:
        return '';
    }
  };

  return (
    <button
      className={`${styles.button} ${getVariantClass()} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
