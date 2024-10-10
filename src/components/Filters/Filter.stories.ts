import { Meta, StoryObj } from '@storybook/react';
import Filters from './Filters';

const meta: Meta<typeof Filters> = {
  title: 'Components/Filters',
  component: Filters,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'hover', 'active', 'disabled'],
    },
    disabled: {
      control: 'boolean',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Filters>;

export const Default: Story = {
  args: { variant: 'default', disabled: false, children: 'Filters' },
};
export const Hover: Story = {
  args: { variant: 'hover', disabled: false, children: 'Filters' },
};
export const Active: Story = {
  args: { variant: 'active', disabled: false, children: 'Filters' },
};
export const Disabled: Story = {
  args: { variant: 'disabled', disabled: true, children: 'Filters' },
};
