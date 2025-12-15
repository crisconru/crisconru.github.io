import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import icon from 'astro-icon';

export default defineConfig({
  integrations: [
    tailwind(),
    icon({
      include: {
        lucide: ['sun', 'moon', 'home', 'user', 'book-open', 'briefcase', 'lightbulb', 'mail', 'github', 'linkedin', 'twitter', 'menu', 'x'],
      },
    }),
  ],
});
