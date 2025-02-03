import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  clean: true,
  format: "esm",
  outDir: "dist",
  experimentalDts: true,
  sourcemap: true,
  tsconfig: "./tsconfig.json",
});
