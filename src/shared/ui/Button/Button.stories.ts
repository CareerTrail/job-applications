import { Meta, StoryObj } from "@storybook/react";
import Button from "./Button";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    color: {
      control: "select",
      options: [
        "accent",
        "button_bg_hover",
        "button_bg_active",
        "tertiary_stroke",
      ],
    },
    disabled: {
      control: "boolean",
    },
    width: {
      control: "text",
    },
    height: {
      control: "text",
    },
    radius: {
      control: "text",
    },
    padding: {
      control: "text",
    },
    gap: {
      control: "text",
    },
    fontSize: {
      control: "text",
    },
    fontWeight: {
      control: "text",
    },
    textTransform: {
      control: "select",
      options: ["none", "capitalize", "uppercase", "lowercase"],
      defaultValue: "none",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    color: "accent",
    width: "400px",
    height: "52px",
    radius: "12px",
    padding: "16px 207px",
    gap: "8px",
    fontSize: "16px",
    fontWeight: "500",
    textTransform: "none",
  },
};

export const Hover: Story = {
  args: {
    color: "button_bg_hover",
    width: "400px",
    height: "52px",
    radius: "12px",
    padding: "16px 207px",
    gap: "8px",
    fontSize: "16px",
    fontWeight: "500",
    textTransform: "none",
  },
};

export const Active: Story = {
  args: {
    color: "button_bg_active",
    width: "400px",
    height: "52px",
    radius: "12px",
    padding: "16px 207px",
    gap: "8px",
    fontSize: "16px",
    fontWeight: "500",
    textTransform: "none",
  },
};

export const Disabled: Story = {
  args: {
    color: "tertiary_stroke",
    width: "400px",
    height: "52px",
    radius: "12px",
    padding: "16px 207px",
    gap: "8px",
    fontSize: "16px",
    fontWeight: "500",
    textTransform: "none",
    disabled: true,
  },
};
