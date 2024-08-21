import { Meta, StoryObj } from '@storybook/react';
import Button from './Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: {
      control: 'select',
      options: [
        'accent',
        'button_bg_hover',
        'button_bg_active',
        'tertiary_stroke',
      ],
      description: 'Цвет фона кнопки',
    },
    color: {
      control: 'select',
      options: ['bg_white', 'secondary'],
      description: 'Цвет текста кнопки',
    },
    isDisabled: {
      control: 'boolean',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    backgroundColor: 'accent',
    color: 'bg_white',
    isDisabled: false,
  },
};

export const Hover: Story = {
  args: {
    backgroundColor: 'button_bg_hover',
    color: 'bg_white',
    isDisabled: false,
  },
};

export const Active: Story = {
  args: {
    backgroundColor: 'button_bg_active',
    color: 'bg_white',
    isDisabled: false,
  },
};

export const Disabled: Story = {
  args: {
    backgroundColor: 'tertiary_stroke',
    color: 'secondary',
    isDisabled: true,
  },
};
