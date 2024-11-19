// @ts-check
import { base, config, react } from "@gurgelio/eslint-config";

export default config(
  {
    extends: [base],
    files: ["packages/tokens/src/**/*.ts"],
  },
  {
    extends: [react],
    files: ["packages/react/src/**/*.{ts,tsx}"],
  },
);
