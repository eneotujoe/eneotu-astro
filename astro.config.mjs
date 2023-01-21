import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwind from '@astrojs/tailwind';
import image from "@astrojs/image";
import { remarkReadingTime } from './remark-reading-time.mjs';
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: 'https://eneotu.com',

  integrations: [
    mdx(),
    tailwind(),
    image({
    serviceEntryPoint: '@astrojs/image/sharp'
    }),
    sitemap(),
  ],

  markdown: {
    remarkPlugins: [remarkReadingTime],
    extendDefaultPlugins: true
  }
});