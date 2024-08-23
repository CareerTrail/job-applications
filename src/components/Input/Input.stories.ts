import { Meta, StoryObj } from '@storybook/react';
import Input from './Input';

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    placeholder: {
      control: 'text',
      description: 'Текст плейсхолдера',
    },
    type: {
      control: 'radio',
      options: ['text', 'password'],
    },
    variant: {
      control: 'select',
      options: [
        'default',
        'defaultPasswordEyeOn',
        'active',
        'activePassword',
        'afterActive',
        'error',
        'disabled',
      ],
    },
    children: {
      control: 'text',
      description: 'Вспомогательный текст или элементы',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    placeholder: 'Your email',
    type: 'text',
    variant: 'default',
    children: '',
  },
};

export const Default_password_eye_on: Story = {
  args: {
    placeholder: 'Your password',
    type: 'password',
    variant: 'defaultPasswordEyeOn',
    children: '',
  },
};

export const Active: Story = {
  args: {
    placeholder: undefined,
    value: 'froggy@gmail.',
    type: 'text',
    variant: 'active',
    children: '',
  },
};

export const Active_password: Story = {
  args: {
    placeholder: undefined,
    value: '12334',
    type: 'password',
    variant: 'activePassword',
    children: '',
  },
};

export const After_active: Story = {
  args: {
    placeholder: undefined,
    value: 'froggy@gmail.com',
    type: 'text',
    variant: 'afterActive',
    children: '',
  },
};

export const Error: Story = {
  args: {
    placeholder: undefined,
    value: 'email.com',
    type: 'text',
    variant: 'error',
    children: 'Invalid email format',
  },
};

export const Disabled: Story = {
  args: {
    placeholder: 'Your email',
    type: 'text',
    variant: 'disabled',
    children: '',
  },
};
