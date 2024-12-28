import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import type { UserConfig } from "vite";

export function getBaseConfig(
  options: { mode: "lib" | "app" } = { mode: "app" }
): UserConfig {
  return defineConfig({
    plugins: [react()],
    build: {
      sourcemap: true,
      ...(options.mode === "lib"
        ? {
            lib: {
              entry: "src/index.ts",
              formats: ["es"],
            },
          }
        : {}),
    },
    resolve: {
      alias: {
        "@": "/src",
      },
    },
  });
}
