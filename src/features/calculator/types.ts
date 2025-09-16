export interface CalculatorState {
  currentOperand: string;
  previousOperand: string;
  operation?: string;
  shouldResetDisplay: boolean;
}

export type Operation = '+' | '-' | '×' | '÷' | '%';

export type ActionType = 'number' | 'operation' | 'equals' | 'clear' | 'delete';

export interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'default' | 'clear' | 'equals' | 'operator' | 'delete';
  className?: string;
}
