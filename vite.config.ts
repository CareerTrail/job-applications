import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  plugins: [
    react(),
    svgr({
      svgrOptions: {
        exportType: 'default',
        ref: true,
        svgo: false,
        titleProp: true,
        icon: true,
      },
      include: '**/*.svg',
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      assets: path.resolve(__dirname, './src/assets'),
      components: path.resolve(__dirname, './src/components'),
      core: path.resolve(__dirname, './src/core'),
      features: path.resolve(__dirname, './src/features'),
      pages: path.resolve(__dirname, './src/pages'),
      services: path.resolve(__dirname, './src/services'),
      hooks: path.resolve(__dirname, './src/hooks'),
      shared: path.resolve(__dirname, './src/shared'),
      store: path.resolve(__dirname, './src/store'),
    },
  },
});
