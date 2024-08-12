import { Meta, StoryObj } from "@storybook/react";
import Input from "./Input";

const meta: Meta<typeof Input> = {
  title: "Components/Input",
  component: Input,
  tags: ["autodocs"],
  argTypes: {
    value: {
      control: "text",
    },
    width: {
      control: "text",
    },
    height: {
      control: "text",
    },
    borderRadius: {
      control: "text",
    },
    borderWidth: {
      control: "text",
    },
    borderStyle: {
      control: "text",
    },
    borderColor: {
      control: "select",
      options: [
        "accent",
        "button_bg_hover",
        "button_bg_active",
        "tertiary_stroke",
        "error_stroke",
      ],
    },
    backgroundColor: {
      control: "select",
      options: [
        "accent",
        "bg_white",
        "button_bg_hover",
        "button_bg_active",
        "tertiary_stroke",
        "error_stroke",
        "input_disabled",
      ],
    },
    padding: {
      control: "text",
    },
    placeholder: {
      control: "text",
    },
    isPassword: {
      control: "boolean",
    },
    helperText: {
      control: "text",
    },
    helperTextColor: {
      control: "select",
      options: [
        "accent",
        "button_bg_hover",
        "button_bg_active",
        "tertiary_stroke",
        "error_stroke",
      ],
    },
    helperTextFontSize: {
      control: "text",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    placeholder: "Your email",

    width: "400px",
    height: "52px",
    borderRadius: "12px",
    borderWidth: "1px",
    borderStyle: "solid",
    borderColor: "tertiary_stroke",
    padding: "16px",
    isPassword: false,
    backgroundColor: "bg_white",
  },
};

export const Default_password_eye_on: Story = {
  args: {
    placeholder: "Password",
    width: "400px",
    height: "52px",
    borderRadius: "12px",
    borderWidth: "1px",
    borderStyle: "solid",
    borderColor: "tertiary_stroke",
    padding: "16px",
    isPassword: true,
    backgroundColor: "bg_white",
  },
};
export const Active: Story = {
  args: {
    value: "froggy@gmail.c",
    width: "400px",
    height: "52px",
    borderRadius: "12px",
    borderWidth: "2px",
    borderStyle: "solid",
    borderColor: "accent",
    padding: "16px",
    isPassword: false,
    backgroundColor: "bg_white",
  },
};
export const Active_password: Story = {
  args: {
    value: "Your password",
    width: "400px",
    height: "52px",
    borderRadius: "12px",
    borderWidth: "1px",
    borderStyle: "solid",
    borderColor: "tertiary_stroke",
    padding: "16px",
    isPassword: true,
    backgroundColor: "bg_white",
  },
};
export const After_active: Story = {
  args: {
    value: "froggy@gmail.c",
    width: "400px",
    height: "52px",
    borderRadius: "12px",
    borderWidth: "1px",
    borderStyle: "solid",
    borderColor: "tertiary_stroke",
    padding: "16px",
    isPassword: false,
    backgroundColor: "bg_white",
  },
};
export const Error: Story = {
  args: {
    value: "email.com",
    width: "400px",
    height: "52px",
    borderRadius: "12px",
    borderWidth: "2px",
    borderStyle: "solid",
    borderColor: "error_stroke",
    padding: "16px",
    isPassword: false,
    backgroundColor: "bg_white",
    helperText: "Invalid email format",
    helperTextColor: "error_stroke",
    helperTextFontSize: "14px",
  },
};
export const Disabled: Story = {
  args: {
    placeholder: "Your email",
    width: "400px",
    height: "52px",
    borderRadius: "12px",
    borderWidth: "2px",
    borderStyle: "solid",
    borderColor: "tertiary_stroke",
    padding: "16px",
    isPassword: false,
    backgroundColor: "input_disabled",
  },
};
