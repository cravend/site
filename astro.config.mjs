import i18n from "astro-i18n";
import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

import image from "@astrojs/image";

// https://astro.build/config
export default defineConfig({
  integrations: [i18n(), image({
    serviceentrypoint: '@astrojs/image/sharp'
  })]
  // integrations: [i18n(), tailwind(), image()]
});