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
    textColor: {
      control: 'select',
      options: ['bg_white', 'secondary'],
      description: 'Цвет текста кнопки',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    backgroundColor: 'accent',
    textColor: 'bg_white',
  },
};

export const Hover: Story = {
  args: {
    backgroundColor: 'button_bg_hover',
    textColor: 'bg_white',
  },
};

export const Active: Story = {
  args: {
    backgroundColor: 'button_bg_active',
    textColor: 'bg_white',
  },
};

export const Disabled: Story = {
  args: {
    backgroundColor: 'tertiary_stroke',
    textColor: 'secondary',
  },
};
