import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

/** @type {import('eslint').Linter.Config[]} */
const eslintConfig = [
  {
    name: "global-ignores",
    ignores: [
      ".next/**",
      "**/.next/**",
      "node_modules/**",
      "**/node_modules/**",
      "out/**",
      "dist/**",
      "coverage/**",
      "*.config.*",
      "next-env.d.ts",
      ".worktrees/**",
      "**/.worktrees/**",
      "backend/**",
    ],
  },
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    files: ["next-env.d.ts"],
    rules: {
      "@typescript-eslint/triple-slash-reference": "off",
    },
  },
];

export default eslintConfig;
