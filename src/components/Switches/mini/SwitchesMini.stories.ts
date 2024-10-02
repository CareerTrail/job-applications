import { Meta, StoryObj } from '@storybook/react';
import SwitchesMini from './SwitchesMini';

const meta: Meta<typeof SwitchesMini> = {
  title: 'Components/SwitchesMini',
  component: SwitchesMini,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof SwitchesMini>;

export const Default: Story = {};
