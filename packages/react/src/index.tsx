import { styled, theme } from "./styles";

const Button = styled("button", {
  base: {
    fontFamily: theme.fonts.default,
    backgroundColor: theme.colors.ignite500,
    borderRadius: theme.radii.md,
    padding: theme.space[4],
    height: theme.space[10],
  },
});

export function App() {
  return <Button>Hello World</Button>;
}
