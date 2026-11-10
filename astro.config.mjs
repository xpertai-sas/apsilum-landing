// @ts-check
import { defineConfig } from "astro/config";

// Dominio propio: GitHub Pages sirve el sitio en apsilum.com.
export default defineConfig({
  site: "https://apsilum.com",
  build: { format: "directory" },
});
