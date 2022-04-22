import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import ViteFonts from "vite-plugin-fonts";
import Pages from "vite-plugin-pages";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    Pages(),
    ViteFonts({
      google: {
        families: ["Noto Sans JP", "Open Sans", "Roboto Mono"],
      },
    }),
  ],
});
