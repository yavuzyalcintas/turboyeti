import { getBaseConfig } from "@repo/config-vite";
import { defineConfig } from "vite";

export default defineConfig({
  ...getBaseConfig(),
  server: {
    port: 3002,
  },
});
