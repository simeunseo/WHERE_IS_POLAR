import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import svgr from 'vite-plugin-svgr';
// https://vitejs.dev/config/

const __dirname = 'src';
export default defineConfig({
  plugins: [
    react(),
    svgr({
      exportAsDefault: true,
    }),
  ],
  resolve: {
    alias: [{ find: '~', replacement: resolve(__dirname) }],
  },
});
