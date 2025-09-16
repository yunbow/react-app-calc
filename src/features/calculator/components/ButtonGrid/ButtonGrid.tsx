import React from 'react';
import { Button } from '../../../../components/Button';
import styles from './ButtonGrid.module.css';

interface ButtonGridProps {
  onNumberClick: (number: string) => void;
  onOperatorClick: (operator: string) => void;
  onEqualsClick: () => void;
  onClearClick: () => void;
  onDeleteClick: () => void;
}

export const ButtonGrid: React.FC<ButtonGridProps> = ({
  onNumberClick,
  onOperatorClick,
  onEqualsClick,
  onClearClick,
  onDeleteClick,
}) => {
  return (
    <div className={styles.buttonGrid}>
      <Button variant="clear" onClick={onClearClick}>
        C
      </Button>
      <Button variant="delete" onClick={onDeleteClick}>
        DEL
      </Button>
      <Button variant="operator" onClick={() => onOperatorClick('%')}>
        %
      </Button>
      <Button variant="operator" onClick={() => onOperatorClick('÷')}>
        ÷
      </Button>

      <Button onClick={() => onNumberClick('7')}>7</Button>
      <Button onClick={() => onNumberClick('8')}>8</Button>
      <Button onClick={() => onNumberClick('9')}>9</Button>
      <Button variant="operator" onClick={() => onOperatorClick('×')}>
        ×
      </Button>

      <Button onClick={() => onNumberClick('4')}>4</Button>
      <Button onClick={() => onNumberClick('5')}>5</Button>
      <Button onClick={() => onNumberClick('6')}>6</Button>
      <Button variant="operator" onClick={() => onOperatorClick('-')}>
        -
      </Button>

      <Button onClick={() => onNumberClick('1')}>1</Button>
      <Button onClick={() => onNumberClick('2')}>2</Button>
      <Button onClick={() => onNumberClick('3')}>3</Button>
      <Button variant="operator" onClick={() => onOperatorClick('+')}>
        +
      </Button>

      <Button onClick={() => onNumberClick('0')}>0</Button>
      <Button onClick={() => onNumberClick('00')}>00</Button>
      <Button onClick={() => onNumberClick('.')}>.</Button>
      <Button variant="equals" onClick={onEqualsClick}>
        =
      </Button>
    </div>
  );
};
