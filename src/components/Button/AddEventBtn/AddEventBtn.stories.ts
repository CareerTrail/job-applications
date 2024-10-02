import { Meta, StoryObj } from '@storybook/react';
import AddEventBtn from './AddEventBtn';

const meta: Meta<typeof AddEventBtn> = {
  title: 'Components/AddEventBtn',
  component: AddEventBtn,
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

type Story = StoryObj<typeof AddEventBtn>;

export const Default: Story = {
  args: {
    variant: 'default',
    disabled: false,
    children: 'Add Event',
  },
};

export const Hover: Story = {
  args: {
    variant: 'hover',
    disabled: false,
    children: 'Add Event',
  },
};

export const Active: Story = {
  args: {
    variant: 'active',
    disabled: false,
    children: 'Add Event',
  },
};

export const Disabled: Story = {
  args: {
    variant: 'disabled',
    disabled: true,
    children: 'Add Event',
  },
};
