import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';
import path from 'path';

export default defineConfig({
  plugins: [
    react(),
    {
      name: 'copy-404',
      closeBundle() {
        const distDir = path.resolve(__dirname, 'dist');
        if (fs.existsSync(path.join(distDir, 'index.html'))) {
          fs.copyFileSync(
            path.join(distDir, 'index.html'),
            path.join(distDir, '404.html')
          );
        }
      },
    },
  ],
  esbuild: {
    loader: 'jsx',
    include: /src\/.*\.jsx?$/,
    exclude: [],
  },
  optimizeDeps: {
    esbuildOptions: {
      loader: {
        '.js': 'jsx',
      },
    },
  },
});

