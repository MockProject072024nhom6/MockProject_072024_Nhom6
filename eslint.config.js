import js from "@eslint/js"
import globals from "globals"
import reactHooks from "eslint-plugin-react-hooks"
import tseslint from "typescript-eslint"
import typescriptParser from "@typescript-eslint/parser"
import typescriptPlugin from "@typescript-eslint/eslint-plugin"

export default tseslint.config({
  extends: [
    js.configs.recommended,
    ...tseslint.configs.recommended,
    "eslint:recommended",
    "plugin:prettier/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "plugin:react/recommended",
    "plugin:@next/next/recommended",
    "eslint-config-prettier",
    "next/core-web-vitals"
  ],
  files: ["**/*.{ts,tsx}"],
  ignores: ["dist", "node_modules", "vite.config.ts"],
  languageOptions: {
    parser: typescriptParser,
    ecmaVersion: 2020,
    globals: globals.browser
  },
  plugins: ["prettier", "react", "react-hooks", "@typescript-eslint", "promise", "jsx-a11y", "import"],
  rules: {
    ...reactHooks.configs.recommended.rules,
    "react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
    ...typescriptPlugin.configs.recommended.rules,
    "prettier/prettier": [
      "warn",
      {
        arrowParens: "avoid",
        semi: false,
        trailingComma: "none",
        tabWidth: 2,
        endOfLine: "auto",
        useTabs: false,
        singleQuote: true,
        printWidth: 120,
        jsxSingleQuote: true
      }
    ],
    "react/jsx-uses-vars": "warn",
    "jsx-a11y/anchor-is-valid": "warn",
    "import/no-unresolved": "warn",
    "import/order": [
      "warn",
      { groups: ["builtin", "external", "internal", "parent", "sibling", "index"], "newlines-between": "always" }
    ],
    "import/newline-after-import": "warn",
    "@typescript-eslint/explicit-module-boundary-types": "warn",
    "@typescript-eslint/explicit-function-return-type": "warn",
    "@typescript-eslint/typedef": [
      "warn",
      {
        variableDeclaration: true,
        parameter: true,
        propertyDeclaration: true,
        memberVariableDeclaration: true
      }
    ],
    "@typescript-eslint/no-unused-vars": "warn",
    "@typescript-eslint/no-explicit-any": "warn"
  },
  settings: {
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"]
    },
    "import/resolver": {
      typescript: {
        project: "./tsconfig.json"
      }
    }
  }
})
