import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '../components/Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'clear', 'equals', 'operator', 'delete'],
    },
    onClick: { action: 'clicked' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: '5',
    variant: 'default',
  },
};

export const Clear: Story = {
  args: {
    children: 'C',
    variant: 'clear',
  },
};

export const Equals: Story = {
  args: {
    children: '=',
    variant: 'equals',
  },
};

export const Operator: Story = {
  args: {
    children: '+',
    variant: 'operator',
  },
};

export const Delete: Story = {
  args: {
    children: 'DEL',
    variant: 'delete',
  },
};