import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

// Static SPA build for GitHub Pages.
// Repository name: petrodomi -> base path '/petrodomi-building-dreams/'.
export default defineConfig({
  base: "/petrodomi-building-dreams/",
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    outDir: "dist",
    emptyOutDir: true,
  },
  server: {
    host: "::",
    port: 8080,
  },
});
