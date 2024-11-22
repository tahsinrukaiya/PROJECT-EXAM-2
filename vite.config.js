import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from 'path';

export default defineConfig({
  plugins: [react()],
  assetsInclude: ["**/*.JPG"],
  build: {
    rollupOptions: {
      external: [],
    },
  },
  resolve: {
    alias: {
      '@api': path.resolve(__dirname, 'src/api'),
    },
  },
});
