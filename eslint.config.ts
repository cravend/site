import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import eslintConfigPrettier from "eslint-config-prettier";
import eslintPluginAstro from "eslint-plugin-astro";

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  ...tseslint.configs.stylistic,
  ...tseslint.configs.strict,
  ...eslintPluginAstro.configs.recommended,
  ...eslintPluginAstro.configs["jsx-a11y-strict"],
  {
    rules: {
      "arrow-body-style": ["error", "as-needed"],
      "astro/jsx-a11y/no-redundant-roles": [
        "error",
        {
          nav: ["navigation"],
          ol: ["list"],
          ul: ["list"],
          li: ["listitem"],
        },
      ],
    },
  },
  eslintConfigPrettier,
);
