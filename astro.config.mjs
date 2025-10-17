import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import netlify from '@astrojs/netlify/functions';

export default defineConfig({
  integrations: [react()],
  adapter: netlify(),
});
