import { Meta, StoryObj } from '@storybook/react';
import AddPlus from './AddPlus';

const meta: Meta<typeof AddPlus> = {
  title: 'Components/AddPlus',
  component: AddPlus,
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: 'select',
      options: ['purple', 'blue', 'green', 'yellow'],
    },
    variant: {
      control: 'select',
      options: ['default', 'hover', 'active'],
    },
  },
};

export default meta;

type Story = StoryObj<typeof AddPlus>;

// Кнопка Purple
export const PurpleDefault: Story = {
  args: {
    variant: 'default',
    color: 'purple',
  },
};

export const PurpleHover: Story = {
  args: {
    variant: 'hover',
    color: 'purple',
  },
};

export const PurpleActive: Story = {
  args: {
    variant: 'active',
    color: 'purple',
  },
};

// Кнопка Blue
export const BlueDefault: Story = {
  args: {
    variant: 'default',
    color: 'blue',
  },
};

export const BlueHover: Story = {
  args: {
    variant: 'hover',
    color: 'blue',
  },
};

export const BlueActive: Story = {
  args: {
    variant: 'active',
    color: 'blue',
  },
};

// Кнопка Green
export const GreenDefault: Story = {
  args: {
    variant: 'default',
    color: 'green',
  },
};

export const GreenHover: Story = {
  args: {
    variant: 'hover',
    color: 'green',
  },
};

export const GreenActive: Story = {
  args: {
    variant: 'active',
    color: 'green',
  },
};

// Кнопка Yellow
export const YellowDefault: Story = {
  args: {
    variant: 'default',
    color: 'yellow',
  },
};

export const YellowHover: Story = {
  args: {
    variant: 'hover',
    color: 'yellow',
  },
};

export const YellowActive: Story = {
  args: {
    variant: 'active',
    color: 'yellow',
  },
};
