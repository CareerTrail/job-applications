import { Meta, StoryObj } from '@storybook/react';
import Switches from './Switches';

const meta: Meta<typeof Switches> = {
  title: 'Components/Switches',
  component: Switches,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Switches>;

export const Default: Story = {
  args: {
    leftLabel: 'Board',
    rightLabel: 'Calendar',
  },
};
