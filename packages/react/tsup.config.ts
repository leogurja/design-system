import { macaronEsbuildPlugins } from "@macaron-css/esbuild";
import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.tsx"],
  clean: true,
  external: ["react"],
  format: "esm",
  outDir: "dist",
  dts: true,
  sourcemap: true,
  cjsInterop: true,
  esbuildOptions: (options) => {
    options.plugins = macaronEsbuildPlugins();
  },
});
