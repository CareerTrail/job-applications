import { Meta, StoryObj } from '@storybook/react';
import ModalBtn from './ModalBtn';

const meta: Meta<typeof ModalBtn> = {
  title: 'Components/ModalBtn',
  component: ModalBtn,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'hover', 'active', 'disabled', 'white'],
    },
    disabled: {
      control: 'boolean',
    },
  },
};

export default meta;

type Story = StoryObj<typeof ModalBtn>;

export const Default: Story = {
  args: {
    variant: 'default',
    disabled: false,
    children: 'Save',
  },
};

export const Hover: Story = {
  args: {
    variant: 'hover',
    disabled: false,
    children: 'Save',
  },
};

export const Active: Story = {
  args: {
    variant: 'active',
    disabled: false,
    children: 'Save',
  },
};

export const Disabled: Story = {
  args: {
    variant: 'disabled',
    disabled: true,
    children: 'Save',
  },
};
export const White: Story = {
  args: {
    variant: 'white',
    disabled: false,
    children: 'Cancel',
  },
};
export const WhiteHov: Story = {
  args: {
    variant: 'white',
    disabled: false,
    children: 'Cancel',
  },
};
