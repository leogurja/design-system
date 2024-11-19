// @ts-check
import { base, config, react } from "@gurgelio/eslint-config";

export default config(
  {
    extends: [base],
    files: ["packages/tokens/**/*.ts"],
  },
  {
    extends: [react],
    files: ["packages/react/**/*.{ts,tsx}"],
  },
);
