import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import compress from '@playform/compress';
import vercel from '@astrojs/vercel/serverless';

export default defineConfig({
  output: 'hybrid',
  adapter: vercel(),
  site: 'https://cognuo.com.br',
  compressHTML: true,
  integrations: [
    tailwind(),
    compress({
      CSS: false,
      HTML: true,
      JavaScript: true,
      Image: false,
      SVG: false,
    }),
  ],
});
