import type { Meta, StoryObj } from '@storybook/react';
import { ButtonGrid } from '../../features/calculator/components/ButtonGrid';

const meta: Meta<typeof ButtonGrid> = {
  title: 'Features/Calculator/Componentsr/ButtonGrid',
  component: ButtonGrid,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    onNumberClick: { action: 'number clicked' },
    onOperatorClick: { action: 'operator clicked' },
    onEqualsClick: { action: 'equals clicked' },
    onClearClick: { action: 'clear clicked' },
    onDeleteClick: { action: 'delete clicked' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    onNumberClick: (number: string) => console.log(`Number: ${number}`),
    onOperatorClick: (operator: string) => console.log(`Operator: ${operator}`),
    onEqualsClick: () => console.log('Equals'),
    onClearClick: () => console.log('Clear'),
    onDeleteClick: () => console.log('Delete'),
  },
};