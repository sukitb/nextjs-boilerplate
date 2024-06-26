/* eslint-disable import/no-extraneous-dependencies */
import react from "@vitejs/plugin-react";
import { loadEnv } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { defineConfig } from "vitest/config";

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  test: {
    globals: true, // This is needed by @testing-library to be cleaned up after each test
    include: ["src/**/*.test.{js,jsx,ts,tsx}"],
    coverage: {
      include: ["src/**/*"],
      exclude: ["src/**/*.stories.{js,jsx,ts,tsx}", "**/*.d.ts"],
      reporter: ["html", "json"],
      reportOnFailure: true,
    },
    environmentMatchGlobs: [["**/*.test.tsx", "jsdom"]],
    setupFiles: ["./vitest-setup.ts"],
    outputFile: "./test-results.json",
    env: loadEnv("", process.cwd(), ""),
  },
});
