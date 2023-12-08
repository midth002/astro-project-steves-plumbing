import { defineConfig } from 'astro/config';
import partytown from "@astrojs/partytown";
import prefetch from "@astrojs/prefetch";

import netlify from "@astrojs/netlify/functions";


// https://astro.build/config
export default defineConfig({
  integrations: [partytown(), prefetch()],
  output: "server",
  adapter: netlify()
});