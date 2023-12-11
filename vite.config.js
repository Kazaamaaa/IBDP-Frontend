// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/',
  plugins: [react()],
  build: {
    assetsDir: 'assets', // Adjust the assets directory based on your project structure
    // Uncomment the next block if you still encounter issues after trying the suggestions
    // rollupOptions: {
    //   external: ['react-data-table-component'],
    // },
    rollupOptions: {
      external: ['/styled-components'],
    },
  },
});
