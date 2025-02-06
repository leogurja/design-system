import { styled } from "@macaron-css/react";
import type { ComponentProps } from "react";
import { theme } from "../styles";

export const Box = styled("div", {
  base: {
    padding: theme.space[4],
    borderRadius: theme.radii.md,
    backgroundColor: theme.colors.gray800,
    borderWidth: "1px",
    borderStyle: "solid",
    borderColor: theme.colors.gray600,
  },
  //   variants: {
  //     size: {
  //       small: {
  //         fontSize: theme.fontSizes.sm,
  //         padding: `${theme.space[2]} ${theme.space[4]}`,
  //       },
  //       medium: {
  //         fontSize: theme.fontSizes.md,
  //         padding: `${theme.space[3]} ${theme.space[5]}`,
  //       },
  //       large: {
  //         fontSize: theme.fontSizes.lg,
  //         padding: `${theme.space[4]} ${theme.space[6]}`,
  //       },
  //     },
  //   },
  //   defaultVariants: {
  //     size: "medium",
  //   },
});

export type BoxProps = ComponentProps<typeof Box>;
