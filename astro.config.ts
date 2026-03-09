import { writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

import { defineConfig, passthroughImageService } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

import { buildMarkdown } from "./src/lib/markdown-for-agents";

// https://astro.build/config
export default defineConfig({
  image: {
    service: passthroughImageService(),
  },
  integrations: [
    {
      name: "markdown-for-agents",
      hooks: {
        "astro:config:setup": () => {
          const publicDir = join(process.cwd(), "public");
          mkdirSync(publicDir, { recursive: true });
          writeFileSync(join(publicDir, "en.md"), buildMarkdown("en"));
          writeFileSync(join(publicDir, "fr.md"), buildMarkdown("fr"));
          writeFileSync(join(publicDir, "index.md"), buildMarkdown("en"));
        },
      },
    },
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
