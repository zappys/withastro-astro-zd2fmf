import { defineConfig } from 'astro/config';
import preact from '@astrojs/preact';
import node from '@astrojs/node';

// https://astro.build/config
export default defineConfig({
  site: 'http://google.com',
  integrations: [preact()],
  redirects: {
    '/test': '/',
  },
  prefetch: {
    throttle: 3,
  },
  output: 'server',
  adapter: node({ mode: 'standalone' }),
});
