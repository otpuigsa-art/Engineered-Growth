import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './', // Importante para que las rutas relativas funcionen en GitHub Pages
  build: {
    outDir: 'dist',
  }
});