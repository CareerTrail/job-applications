import { Meta, StoryObj } from '@storybook/react';
import Button from './Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
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

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    variant: 'default',
    disabled: false,
    children: 'Log in',
  },
};

export const Hover: Story = {
  args: {
    variant: 'hover',
    disabled: false,
    children: 'Log in',
  },
};

export const Active: Story = {
  args: {
    variant: 'active',
    disabled: false,
    children: 'Log in',
  },
};

export const Disabled: Story = {
  args: {
    variant: 'disabled',
    disabled: true,
    children: 'Log in',
  },
};
