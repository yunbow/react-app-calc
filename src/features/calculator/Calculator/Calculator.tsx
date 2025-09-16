import React, { useEffect } from 'react';
import { DisplaySection } from '../components/DisplaySection';
import { ButtonGrid } from '../components/ButtonGrid';
import { useCalculator } from '../useCalculator';
import { Operation } from '../types';
import styles from './Calculator.module.css';

export const Calculator: React.FC = () => {
  const {
    displayValue,
    clear,
    deleteDigit,
    appendNumber,
    chooseOperation,
    equals,
  } = useCalculator();

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (/^\d$/.test(event.key)) {
        appendNumber(event.key);
      }

      if (['+', '-'].includes(event.key)) {
        chooseOperation(event.key as Operation);
      }

      if (event.key === '*') {
        chooseOperation('×');
      }

      if (event.key === '/') {
        event.preventDefault();
        chooseOperation('÷');
      }

      if (event.key === '.') {
        appendNumber('.');
      }

      if (event.key === 'Backspace') {
        deleteDigit();
      }

      if (event.key === 'Enter' || event.key === '=') {
        equals();
      }

      if (event.key === 'Escape' || event.key === 'Delete') {
        clear();
      }

      if (event.key === '%') {
        chooseOperation('%');
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [appendNumber, chooseOperation, clear, deleteDigit, equals]);

  return (
    <div className={styles.calculator}>
      <DisplaySection value={displayValue} />
      <ButtonGrid
        onNumberClick={appendNumber}
        onOperatorClick={(op) => chooseOperation(op as Operation)}
        onEqualsClick={equals}
        onClearClick={clear}
        onDeleteClick={deleteDigit}
      />
    </div>
  );
};
