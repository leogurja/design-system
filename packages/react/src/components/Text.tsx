import { styled } from "@macaron-css/react";
import type { ComponentProps } from "react";
import { theme } from "../styles";

export const Text = styled("p", {
  base: {
    fontFamily: theme.fonts.default,
    lineHeight: theme.lineHeights.base,
    margin: 0,
    color: theme.colors.gray100,
  },
  variants: {
    size: {
      xxs: { fontSize: theme.fontSizes.xxs },
      xs: { fontSize: theme.fontSizes.xs },
      sm: { fontSize: theme.fontSizes.sm },
      md: { fontSize: theme.fontSizes.md },
      lg: { fontSize: theme.fontSizes.lg },
      xl: { fontSize: theme.fontSizes.xl },
      "2xl": { fontSize: theme.fontSizes["2xl"] },
      "4xl": { fontSize: theme.fontSizes["4xl"] },
      "5xl": { fontSize: theme.fontSizes["5xl"] },
      "6xl": { fontSize: theme.fontSizes["6xl"] },
      "7xl": { fontSize: theme.fontSizes["7xl"] },
      "8xl": { fontSize: theme.fontSizes["8xl"] },
      "9xl": { fontSize: theme.fontSizes["9xl"] },
    },
  },
});

export type TextProps = ComponentProps<typeof Text>;
