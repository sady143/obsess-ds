import path from "node:path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  root: path.resolve(import.meta.dirname, "playground"),
  plugins: [react()],
  css: {
    postcss: path.resolve(import.meta.dirname, "postcss.config.cjs"),
  },
  resolve: {
    alias: {
      "@sady143/obsess-ds": path.resolve(import.meta.dirname, "src/index.ts"),
    },
  },
  server: {
    port: 5173,
    host: true,
  },
});
