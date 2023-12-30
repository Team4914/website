import { defineConfig } from "astro/config";
import svelte from "@astrojs/svelte";
import { remarkReadingTime } from './src/utils/readTime.ts'
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx"

// https://astro.build/config
export default defineConfig({
  site: "https://vicparkrobotics.picafe.me",
  markdown: {
    remarkPlugins: [remarkReadingTime],
    drafts: true,
    shikiConfig: {
      theme: 'material-theme-palenight',
      wrap: true
    }
  },

  integrations: [
    mdx({
      syntaxHighlight: 'shiki',
      shikiConfig: {
        theme: 'material-theme-palenight',
        wrap: true
      },
      drafts: true
    }), 
    svelte(),
    sitemap()],
});
