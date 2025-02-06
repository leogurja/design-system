import { macaronEsbuildPlugins } from "@macaron-css/esbuild";
import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  clean: true,
  external: ["react"],
  format: "esm",
  outDir: "dist",
  experimentalDts: true,
  sourcemap: true,
  tsconfig: "./tsconfig.json",
  esbuildPlugins: [...macaronEsbuildPlugins()],
});
