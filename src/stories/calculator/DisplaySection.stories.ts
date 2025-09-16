import type { Meta, StoryObj } from '@storybook/react';
import { DisplaySection } from '../../features/calculator/components/DisplaySection';

const meta: Meta<typeof DisplaySection> = {
  title: 'Features/Calculator/Componentsr/DisplaySection',
  component: DisplaySection,
  parameters: {
    layout: 'centered',
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

export const WithNumber: Story = {
  args: {
    value: '123,456',
  },
};

export const WithDecimal: Story = {
  args: {
    value: '123.45',
  },
};