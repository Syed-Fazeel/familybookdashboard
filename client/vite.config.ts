import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  root: ".", // keep it simple since Vercel runs inside /client
  build: {
    outDir: "dist", // IMPORTANT — Vercel looks for this folder
    emptyOutDir: true,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
});
