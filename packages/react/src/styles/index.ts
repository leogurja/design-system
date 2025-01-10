import { colors, fontSizes, fontWeights, fonts, lineHeights, radii, space } from "@gurgelio/tokens";
import { createGlobalTheme, createTheme, globalStyle, keyframes, style } from "@macaron-css/core";
import { styled } from "@macaron-css/react";

globalStyle("*", {
  padding: 0,
  margin: 0,
  boxSizing: "border-box",
});

export const theme = createGlobalTheme(":root", {
  colors,
  fontSizes,
  fontWeights,
  fonts,
  lineHeights,
  radii,
  space,
});

export { styled, style, keyframes, createTheme };
