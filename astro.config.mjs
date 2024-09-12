import { defineConfig } from "astro/config";

import preact from "@astrojs/preact";

export default defineConfig({
  site: "https://gorgeous-vacherin-71a74b.netlify.app/",
  integrations: [preact()]
});