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
    variant: 'default',
    children: '',
  },
};
export const Active: Story = {
  args: {
    placeholder: undefined,
    value: 'froggy@gmail.',
    variant: 'active',
    children: '',
  },
};

export const After_active: Story = {
  args: {
    placeholder: undefined,
    value: 'froggy@gmail.com',
    variant: 'afterActive',
    children: '',
  },
};

export const Error: Story = {
  args: {
    placeholder: undefined,
    value: 'email.com',
    variant: 'error',
    children: 'Invalid email format',
  },
};
