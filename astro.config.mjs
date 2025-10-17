import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import netlify from '@astrojs/netlify/functions';

// If you're using Tailwind, you can include it too:
// import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [
    react(),
    // tailwind(), // uncomment if you have Tailwind installed
  ],
  adapter: netlify(),
});
