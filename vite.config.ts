import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import pluginTsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), pluginTsconfigPaths()],
  server: {
    open: true,
    port: 3000,
  },
});
