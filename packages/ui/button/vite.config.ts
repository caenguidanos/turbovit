import * as path from "path";

import { defineConfig } from "vite";
import viteReact from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";

export default defineConfig({
   plugins: [viteReact(), dts()],
   build: {
      lib: {
         entry: path.resolve(__dirname, "src/index.ts"),
         formats: ["es", "cjs"],
         fileName: (format: string) => `index.${format}.js`,
      },
      rollupOptions: {
         external: ["react", "react-dom"],
      },
      minify: true,
   },
});
