import type { Meta, StoryObj } from '@storybook/react';
import { Calculator } from '../../features/calculator/Calculator';

const meta: Meta<typeof Calculator> = {
  title: 'Features/Calculator/Calculator',
  component: Calculator,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};