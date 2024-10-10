import { Meta, StoryObj } from '@storybook/react';
import TextAreaModal from './TextAreaModal';

const meta: Meta<typeof TextAreaModal> = {
  title: 'Components/TextAreaModal',
  component: TextAreaModal,
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

type Story = StoryObj<typeof TextAreaModal>;

export const Default: Story = {
  args: {
    placeholder: 'Company',
    type: 'text',
    variant: 'default',
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
