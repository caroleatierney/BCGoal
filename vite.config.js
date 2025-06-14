import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  base: "/BCGoal/",
  plugins: [react(), tailwindcss()],
  define: {
    "process.env": {
      VITE_API_URL: process.env.VITE_API_URL,
    },
  },
  build: {
    outDir: "dist",
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          return assetInfo.name === "style.css"
            ? "css/style.css"
            : `assets/${assetInfo.name}`;
        },
        chunkFileNames: "js/[name]-[hash].js",
        entryFileNames: "js/[name]-[hash].js",
      },
    },
  },
});
