import { colors, fontSizes, fontWeights, fonts, lineHeights, radii, space } from "@gurgelio/tokens";
import { createGlobalTheme, createTheme, globalStyle, keyframes, style } from "@macaron-css/core";

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

export { style, keyframes, createTheme };
