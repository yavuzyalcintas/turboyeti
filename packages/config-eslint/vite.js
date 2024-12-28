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
    },
  },
  rules: {
    "react/react-in-jsx-scope": "off",
    "react/prop-types": "off",
    "@typescript-eslint/no-explicit-any": "warn",
    "@typescript-eslint/no-unused-vars": [
      "warn",
      {
        argsIgnorePattern: "^_",
        varsIgnorePattern: "^_",
      },
    ],
    "tailwindcss/no-custom-classname": "off",
    "tailwindcss/classnames-order": "warn",
  },
  ignorePatterns: ["node_modules/", "dist/"],
}; 