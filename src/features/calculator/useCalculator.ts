import { useState } from 'react';
import { CalculatorState, Operation } from './types';

export const useCalculator = () => {
  const [state, setState] = useState<CalculatorState>({
    currentOperand: '0',
    previousOperand: '',
    operation: undefined,
    shouldResetDisplay: false,
  });

  const clear = () => {
    setState({
      currentOperand: '0',
      previousOperand: '',
      operation: undefined,
      shouldResetDisplay: false,
    });
  };

  const deleteDigit = () => {
    setState(prev => {
      if (prev.currentOperand === '0') return prev;
      if (prev.currentOperand.length === 1) {
        return { ...prev, currentOperand: '0' };
      }
      return { ...prev, currentOperand: prev.currentOperand.slice(0, -1) };
    });
  };

  const appendNumber = (number: string) => {
    setState(prev => {
      if (prev.shouldResetDisplay) {
        return {
          ...prev,
          currentOperand: number === '.' ? '0.' : number === '00' ? '0' : number,
          shouldResetDisplay: false,
        };
      }

      if (prev.currentOperand === '0') {
        if (number === '.') {
          return { ...prev, currentOperand: '0.' };
        }
        if (number === '00') {
          return prev;
        }
        return { ...prev, currentOperand: number };
      }

      if (number === '.' && prev.currentOperand.includes('.')) {
        return prev;
      }

      return { ...prev, currentOperand: prev.currentOperand + number };
    });
  };

  const chooseOperation = (operation: Operation) => {
    setState(prev => {
      if (prev.currentOperand === '0' && prev.previousOperand === '') {
        return prev;
      }

      if (operation === '%') {
        const result = (parseFloat(prev.currentOperand) / 100).toString();
        return { ...prev, currentOperand: result };
      }

      if (prev.previousOperand !== '') {
        const result = compute(prev);
        return {
          currentOperand: result,
          previousOperand: result,
          operation,
          shouldResetDisplay: true,
        };
      }

      return {
        ...prev,
        operation,
        previousOperand: prev.currentOperand,
        shouldResetDisplay: true,
      };
    });
  };

  const compute = (calculatorState: CalculatorState): string => {
    const prev = parseFloat(calculatorState.previousOperand);
    const current = parseFloat(calculatorState.currentOperand);

    if (isNaN(prev) || isNaN(current)) return calculatorState.currentOperand;

    let computation: number;
    switch (calculatorState.operation) {
      case '+':
        computation = prev + current;
        break;
      case '-':
        computation = prev - current;
        break;
      case '×':
        computation = prev * current;
        break;
      case '÷':
        if (current === 0) {
          alert('0で割ることはできません');
          return calculatorState.currentOperand;
        }
        computation = prev / current;
        break;
      default:
        return calculatorState.currentOperand;
    }

    return parseFloat(computation.toFixed(10)).toString();
  };

  const equals = () => {
    setState(prev => {
      if (prev.operation == null || prev.previousOperand === '') {
        return prev;
      }

      const result = compute(prev);
      return {
        currentOperand: result,
        previousOperand: '',
        operation: undefined,
        shouldResetDisplay: true,
      };
    });
  };

  const getDisplayNumber = (number: string): string => {
    const stringNumber = number.toString();
    const integerDigits = parseFloat(stringNumber.split('.')[0]);
    const decimalDigits = stringNumber.split('.')[1];

    let integerDisplay: string;

    if (isNaN(integerDigits)) {
      integerDisplay = '0';
    } else {
      integerDisplay = integerDigits.toLocaleString('ja-JP');
    }

    if (decimalDigits != null) {
      return `${integerDisplay}.${decimalDigits}`;
    } else {
      return integerDisplay;
    }
  };

  return {
    currentOperand: state.currentOperand,
    previousOperand: state.previousOperand,
    operation: state.operation,
    displayValue: getDisplayNumber(state.currentOperand),
    clear,
    deleteDigit,
    appendNumber,
    chooseOperation,
    equals,
  };
};
