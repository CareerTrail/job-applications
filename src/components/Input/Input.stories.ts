import { Meta, StoryObj } from '@storybook/react';
import Input from './Input';

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: {
      control: 'select',
      options: ['bg_white', 'error_bg', 'input_bg_disabled'],
    },
    placeholder: {
      control: 'text',
      description: 'Текст плейсхолдера',
    },
    borderWidth: {
      control: 'text',
      description: 'Ширина бордера',
    },
    borderColor: {
      control: 'select',
      options: ['tertiary_stroke', 'accent', 'error_stroke'],
    },
    value: {
      control: 'text',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    backgroundColor: 'bg_white',
    placeholder: 'Your email',
    borderWidth: '1px',
    borderColor: 'tertiary_stroke',
  },
};

export const Default_password_eye_on: Story = {
  args: {
    backgroundColor: 'bg_white',
    placeholder: 'Your password',
    borderWidth: '1px',
    borderColor: 'tertiary_stroke',
  },
};
export const Active: Story = {
  args: {
    backgroundColor: 'bg_white',
    placeholder: undefined,
    borderWidth: '2px',
    borderColor: 'accent',
    value: 'froggy@gmail.',
  },
};
export const Active_password: Story = {
  args: {
    backgroundColor: 'bg_white',
    placeholder: undefined,
    borderWidth: '2px',
    borderColor: 'accent',
    value: '12334',
  },
};
export const After_active: Story = {
  args: {
    backgroundColor: 'bg_white',
    placeholder: undefined,
    borderWidth: '1px',
    borderColor: 'tertiary_stroke',
    value: 'froggy@gmail.com',
  },
};
export const Error: Story = {
  args: {
    backgroundColor: 'error_bg',
    placeholder: undefined,
    borderWidth: '2px',
    borderColor: 'error_stroke',
    value: 'email.com',
  },
};
export const Disabled: Story = {
  args: {
    backgroundColor: 'input_bg_disabled',
    placeholder: 'Your email',
    borderWidth: '1px',
    borderColor: 'tertiary_stroke',
  },
};
