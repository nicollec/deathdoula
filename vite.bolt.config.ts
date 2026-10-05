import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/postcss';
import { defineConfig } from 'vite';

// Bolt runs previews in a browser-hosted WebContainer. The full Vinext +
// Cloudflare development runtime is kept in `npm run dev:site`, while this
// lightweight entry point renders the same page for Bolt's preview pane.
export default defineConfig({
  plugins: [react()],
  css: { postcss: { plugins: [tailwindcss()] } },
});
