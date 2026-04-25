// @ts-check
import { defineConfig } from "astro/config";

import preact from "@astrojs/preact";

import mdx from "@astrojs/mdx";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: "https://lublio.com",
  integrations: [preact(), mdx(), icon()],
  markdown: {
    shikiConfig: {
      theme: "dracula",
    },
  },
});