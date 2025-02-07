import { Text, type TextProps } from "@gurgelio/react";
import type { Meta, StoryObj } from "@storybook/react";
import "@gurgelio/react/dist/index.css";

export default {
  title: "Typography/Text",
  component: Text,
  args: {
    children: "Example text",
  },
} as Meta<TextProps>;

export const ExtraSmall: StoryObj<TextProps> = {};

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: "strong text",
    as: "strong",
  },
};
