import { resolve } from 'node:path';
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        accueil: resolve(import.meta.dirname, 'index.html'),
        accompagnements: resolve(import.meta.dirname, 'accompagnements/index.html'),
        aPropos: resolve(import.meta.dirname, 'a-propos/index.html'),
      },
    },
  },
});
