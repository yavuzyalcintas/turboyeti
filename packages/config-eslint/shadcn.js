/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:tailwindcss/recommended",
    "prettier",
  ],
  plugins: ["@typescript-eslint", "react", "tailwindcss"],
  settings: {
    react: {
      version: "detect",
    },
    tailwindcss: {
      callees: ["cn", "cva"],
      config: "tailwind.config.ts",
      classRegex: "^(class(Name)?|tw)$",
    },
  },
  rules: {
    "react/react-in-jsx-scope": "off",
    "react/prop-types": "off",
    "@typescript-eslint/no-explicit-any": "error",
    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        argsIgnorePattern: "^_",
        varsIgnorePattern: "^_",
      },
    ],
    "tailwindcss/no-custom-classname": "error",
    "tailwindcss/classnames-order": "error",
    "react/self-closing-comp": "error",
    "react/no-array-index-key": "warn",
    "@typescript-eslint/consistent-type-imports": [
      "warn",
      { prefer: "type-imports" }
    ],
  },
  ignorePatterns: ["node_modules/", "dist/"],
}; 