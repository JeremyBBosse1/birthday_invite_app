import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  root: './src', // root directory for Vite to look for source files (index.html should be inside src)
  build: {
    outDir: '../build', // output build folder should be outside src
    rollupOptions: {
      input: './src/index.html', // Make sure the input path for Rollup is correct
    },
  },
});
