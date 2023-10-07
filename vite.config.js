import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": "/src", // Sesuaikan dengan direktori proyek Anda jika berbeda
      "@components": "/src/components",
    },
  },
});
