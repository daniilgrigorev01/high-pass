import { defineConfig } from 'astro/config';

export default defineConfig({
  server: {
    host: true,
  },
  build: {
    inlineStylesheets: 'never',
  },
});
