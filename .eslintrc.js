module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:jest/all",
    "plugin:testing-library/react",
    "plugin:jest-dom/recommended",
    "next/core-web-vitals",
    "prettier",
  ],
  plugins: ["prettier"],
  ignorePatterns: ["coverage", "build"],
  rules: {
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
        ],
      },
    ],
    "no-unused-vars": "off",
    "no-use-before-define": "off",
    "prettier/prettier": "error",
    "react/jsx-filename-extension": ["error", { extensions: [".tsx"] }],
  },
};
