import { styled } from "@macaron-css/react";
import type { ComponentProps } from "react";
import { theme } from "../styles";

export const Heading = styled("h2", {
  base: {
    fontFamily: theme.fonts.default,
    lineHeight: theme.lineHeights.shorter,
    margin: 0,
    color: theme.colors.gray100,
  },
  variants: {
    size: {
      sm: { fontSize: theme.fontSizes.xl },
      md: { fontSize: theme.fontSizes["2xl"] },
      lg: { fontSize: theme.fontSizes["4xl"] },
      xl: { fontSize: theme.fontSizes["5xl"] },
      "2xl": { fontSize: theme.fontSizes["6xl"] },
      "4xl": { fontSize: theme.fontSizes["7xl"] },
      "5xl": { fontSize: theme.fontSizes["8xl"] },
      "6xl": { fontSize: theme.fontSizes["9xl"] },
    },
  },
});

export type HeadingProps = ComponentProps<typeof Heading>;
