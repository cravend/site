import i18n from "astro-i18n";
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [
    i18n(),
    tailwind({
      applyBaseStyles: false,
    }),
  ],
  experimental: {
    assets: true,
  },
});
