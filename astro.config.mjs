// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import mdx from "@astrojs/mdx";

export default defineConfig({
  site: "https://arhamcode.github.io",

  i18n: {
    defaultLocale: "en",
    locales: ["en", "id"],
    routing: {
      prefixDefaultLocale: false,
    },
  },

  integrations: [mdx()],

  markdown: {
    shikiConfig: {
      theme: "github-dark",
      wrap: true,
    },
  },

  vite: {
    plugins: [tailwindcss()],
  },
});
