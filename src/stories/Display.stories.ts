import type { Meta, StoryObj } from '@storybook/react';
import { Display } from '../components/Display';

const meta: Meta<typeof Display> = {
  title: 'Components/Display',
  component: Display,
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'dark',
      values: [
        { name: 'dark', value: '#22252d' },
        { name: 'light', value: '#ffffff' },
      ],
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: '0',
  },
};

export const Number: Story = {
  args: {
    value: '123,456',
  },
};

export const Decimal: Story = {
  args: {
    value: '123.45',
  },
};

export const LargeNumber: Story = {
  args: {
    value: '1,234,567,890',
  },
};