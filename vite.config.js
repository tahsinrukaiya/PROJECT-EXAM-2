import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  assetsInclude: ["**/*.JPG"],
  build: {
    rollupOptions: {
      external: ["/src/Components/Pages/Venues/VenueCard"],
    },
  },
  resolve: {
    alias: {
      '@api': '/src/api',
    },
  },
});
