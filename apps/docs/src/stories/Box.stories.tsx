import { Box, type BoxProps } from "@gurgelio/react";
import type { Meta, StoryObj } from "@storybook/react";
import "@gurgelio/react/dist/index.css";

export default {
  title: "Surfaces/Box",
  component: Box,
  tags: ["autodocs"],
  argTypes: {
    children: {
      table: {
        type: {
          summary: "ReactNode",
        },
      },
    },
  },
  args: {
    children: (
      <>
        <span>Testando o elemento Box</span>
      </>
    ),
  },
} satisfies Meta<BoxProps>;

export const Primary: StoryObj<BoxProps> = {};
