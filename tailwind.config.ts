import type { Config } from "tailwindcss";
import { obsessTailwindPreset } from "./src/tailwind-preset";

export default {
  presets: [obsessTailwindPreset],
  content: [
    "./playground/index.html",
    "./playground/src/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
} satisfies Config;
