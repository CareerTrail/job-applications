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
    isPassword: {
      control: 'boolean',
    },
    helperText: {
      control: 'text',
    },
    helperTextColor: {
      control: 'select',
      options: ['error_stroke'],
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
    isPassword: false,
  },
};

export const Default_password_eye_on: Story = {
  args: {
    backgroundColor: 'bg_white',
    placeholder: 'Your password',
    borderWidth: '1px',
    borderColor: 'tertiary_stroke',
    isPassword: true,
  },
};
export const Active: Story = {
  args: {
    backgroundColor: 'bg_white',
    placeholder: undefined,
    borderWidth: '2px',
    borderColor: 'accent',
    value: 'froggy@gmail.',
    isPassword: false,
  },
};
export const Active_password: Story = {
  args: {
    backgroundColor: 'bg_white',
    placeholder: undefined,
    borderWidth: '2px',
    borderColor: 'accent',
    value: '12334',
    isPassword: true,
  },
};
export const After_active: Story = {
  args: {
    backgroundColor: 'bg_white',
    placeholder: undefined,
    borderWidth: '1px',
    borderColor: 'tertiary_stroke',
    value: 'froggy@gmail.com',
    isPassword: false,
  },
};
export const Error: Story = {
  args: {
    backgroundColor: 'error_bg',
    placeholder: undefined,
    borderWidth: '2px',
    borderColor: 'error_stroke',
    value: 'email.com',
    isPassword: false,
    helperText: 'Invalid email format',
    helperTextColor: 'error_stroke',
  },
};
export const Disabled: Story = {
  args: {
    backgroundColor: 'input_bg_disabled',
    placeholder: 'Your email',
    borderWidth: '1px',
    borderColor: 'tertiary_stroke',
    isPassword: false,
  },
};
