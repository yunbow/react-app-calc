import React from 'react';
import { Display } from '../../../../components/Display';
import styles from './DisplaySection.module.css';

interface DisplaySectionProps {
  value: string;
}

export const DisplaySection: React.FC<DisplaySectionProps> = ({ value }) => {
  return (
    <div className={styles.displaySection}>
      <Display value={value} />
    </div>
  );
};
