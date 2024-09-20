// @ts-check
import tailwind from '@astrojs/tailwind';
import { defineConfig } from 'astro/config';
import icon from 'astro-icon';

export default defineConfig({
  integrations: [
    tailwind(),
    icon({
      iconDir: 'src/assets/icons',
    }),
  ],
  server: {
    host: true,
  },
});
