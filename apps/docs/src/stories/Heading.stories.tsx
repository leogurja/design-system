import { Heading, type HeadingProps } from "@gurgelio/react";
import type { Meta, StoryObj } from "@storybook/react";
import "@gurgelio/react/dist/index.css";

export default {
  title: "Typography/Heading",
  component: Heading,
  args: {
    children: "Example heading",
  },
} as Meta<HeadingProps>;

export const ExtraSmall: StoryObj<HeadingProps> = {};

export const CustomTag: StoryObj<HeadingProps> = {
  args: {
    children: "H1 Heading",
    as: "h1",
  },
};
