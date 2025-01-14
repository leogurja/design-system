import { styled } from "@macaron-css/react";
import type { ComponentProps } from "react";
import { theme } from "./styles";

const Button = styled("button", {
  base: {
    fontFamily: theme.fonts.default,
    backgroundColor: theme.colors.ignite500,
    borderRadius: theme.radii.sm,
    border: 0,
    color: theme.colors.gray100,
    fontWeight: theme.fontWeights.bold,

    ":hover": {},
  },
  variants: {
    size: {
      small: {
        fontSize: theme.fontSizes.sm,
        padding: `${theme.space[2]} ${theme.space[4]}`,
      },
      medium: {
        fontSize: theme.fontSizes.md,
        padding: `${theme.space[3]} ${theme.space[5]}`,
      },
      large: {
        fontSize: theme.fontSizes.lg,
        padding: `${theme.space[4]} ${theme.space[6]}`,
      },
    },
  },
  defaultVariants: {
    size: "medium",
  },
});

Button.displayName = "Button";

export type ButtonProps = ComponentProps<typeof Button>;

export { Button };
