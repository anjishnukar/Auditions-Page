import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  base: '/', // This ensures assets are loaded correctly
  server: {
    port: 3000,
    // Add any proxy configurations if needed
    // proxy: {
    //   '/api': 'http://your-backend-url'
    // }
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    // Generate SPA fallback for client-side routing
    rollupOptions: {
      output: {
        manualChunks: undefined
      }
    }
  }
});