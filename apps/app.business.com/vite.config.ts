import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import copy from "rollup-plugin-copy";

export default defineConfig(({ command }) => ({
   plugins: [
      copy({
         targets: [
            { src: "../../packages/style/assets/Inter/**/*", dest: "public/fonts/Inter" },
            { src: "../../packages/style/assets/Lato/**/*", dest: "public/fonts/Lato" },
         ],
         verbose: command === "build",
         copyOnce: true,
         hook: "buildStart",
      }),
      react(),
   ],
}));
