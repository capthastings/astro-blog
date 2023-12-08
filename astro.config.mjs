import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://heroic-starship-adf59a.netlify.app/",
  integrations: [preact()]
});