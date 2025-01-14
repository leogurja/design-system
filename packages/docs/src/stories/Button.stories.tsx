import { Button, type ButtonProps } from "@gurgelio/react";
import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import "@gurgelio/react/dist/index.css";

const meta = {
  title: "Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    size: {
      table: {
        defaultValue: { summary: "medium" },
        category: "variants",
      },
      type: {
        name: "enum",
        value: ["small", "medium", "large"],
      },
    },
    onClick: {
      defaultValue: {
        required: false,
      },
    },
    children: {
      table: {
        type: {
          summary: "ReactNode",
        },
      },
    },
  },
  args: {
    onClick: fn(),
    children: "Button",
  },
} satisfies Meta<ButtonProps>;

export const Large: StoryObj<ButtonProps> = {
  args: {
    size: "large",
  },
};

export const Medium: StoryObj<ButtonProps> = {
  args: {
    size: "medium",
  },
};

export const Small: StoryObj<ButtonProps> = {
  args: {
    size: "small",
  },
};

export default meta;
