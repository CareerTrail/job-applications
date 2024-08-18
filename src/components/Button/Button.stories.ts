import { Meta, StoryObj } from '@storybook/react';
import Button from './Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: 'select',
      options: [
        'accent',
        'button_bg_hover',
        'button_bg_active',
        'tertiary_stroke',
      ],
      description: 'Цвет кнопки',
    },
    textColor: {
      control: 'select',
      options: ['bg_white', 'secondary'],
      description: 'Цвет текста',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    color: 'accent',
    textColor: 'bg_white',
  },
};

export const Hover: Story = {
  args: {
    color: 'button_bg_hover',
    textColor: 'bg_white',
  },
};

export const Active: Story = {
  args: {
    color: 'button_bg_active',
    textColor: 'bg_white',
  },
};

export const Disabled: Story = {
  args: {
    color: 'tertiary_stroke',
    textColor: 'secondary',
  },
};
