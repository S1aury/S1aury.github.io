import { defineConfig } from "astro/config";

// Explicit overrides also let us verify a project-site subpath locally.
export default defineConfig({
  site: process.env.SITE_URL || "https://S1aury.github.io",
  base: process.env.BASE_PATH || "/",
  output: "static",
  trailingSlash: "always",
  devToolbar: { enabled: false },
});
