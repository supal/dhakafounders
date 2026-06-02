import type { Config } from "tailwindcss";

/**
 * Tailwind CSS v4 — minimal config.
 * All design tokens (colors, fonts, animations, shadows) are defined in
 * src/app/globals.css via the @theme block (CSS-first configuration).
 * This file only needs to exist for content path scanning.
 */
const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  plugins: [],
};

export default config;
