module.exports = {
  parser: "@typescript-eslint/parser",
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "plugin:jest/all",
    "plugin:testing-library/react",
    "plugin:jest-dom/recommended",
    "plugin:@next/next/core-web-vitals",
    "airbnb",
    "prettier",
  ],
  parserOptions: {
    project: ["./tsconfig.dev.json"],
  },
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
    },
  },
  plugins: ["prettier"],
  ignorePatterns: ["coverage", "build"],
  rules: {
    "arrow-body-style": ["error", "as-needed"],
    "import/extensions": ["error", "never"],
    "import/order": [
      "error",
      {
        groups: [
          "builtin",
          "external",
          "internal",
          "parent",
          "sibling",
          "index",
          "object",
          "type",
        ],
      },
    ],
    "no-unused-vars": "off",
    "no-use-before-define": "off",
    "@typescript-eslint/no-use-before-define": [
      "error",
      { ignoreTypeReferences: false },
    ],
    "prefer-arrow-callback": "error",
    "prettier/prettier": "error",
    "react/jsx-filename-extension": ["error", { extensions: [".tsx"] }],
    "react/jsx-uses-react": "off",
    "react/react-in-jsx-scope": "off",
    "react/require-default-props": "off",
  },
};
