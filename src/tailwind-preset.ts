import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

export const obsessTailwindPreset: Partial<Config> = {
  darkMode: ["class"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      screens: {
        medium: "600px",
        expanded: "840px",
        large: "1200px",
      },
      spacing: {
        "obs-gutter": "var(--obs-grid-gutter)",
        "obs-margin": "var(--obs-grid-margin)",
      },
      fontFamily: {
        display: ["Cormorant Garamond", "serif"],
        body: ["DM Sans", "sans-serif"],
        damion: ["Damion", "cursive"],
        carrois: ["Carrois Gothic", "sans-serif"],
        handlee: ["Handlee", "cursive"],
        laila: ["Laila", "serif"],
        poppins: ["Poppins", "sans-serif"],
        "noto-bengali": ['"Noto Sans Bengali"', "sans-serif"],
        "noto-tamil": ['"Noto Sans Tamil"', "sans-serif"],
        "noto-telugu": ['"Noto Sans Telugu"', "sans-serif"],
        "noto-kannada": ['"Noto Sans Kannada"', "sans-serif"],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
        terracotta: {
          DEFAULT: "hsl(var(--obs-terracotta))",
          foreground: "hsl(var(--obs-terracotta-foreground))",
        },
        honeybee: {
          DEFAULT: "hsl(var(--obs-honeybee))",
          foreground: "hsl(var(--obs-honeybee-foreground))",
        },
        gold: {
          DEFAULT: "hsl(var(--obs-gold))",
          hover: "hsl(var(--obs-gold-hover))",
          foreground: "hsl(var(--obs-gold-foreground))",
        },
        "editorial-blue": {
          DEFAULT: "hsl(var(--obs-editorial-blue))",
          foreground: "hsl(var(--obs-editorial-blue-foreground))",
        },
        love: {
          DEFAULT: "hsl(var(--obs-love))",
          soft: "hsl(var(--obs-love-soft))",
          foreground: "hsl(var(--obs-love-foreground))",
        },
        crimson: {
          DEFAULT: "hsl(var(--obs-crimson))",
          foreground: "hsl(var(--obs-crimson-foreground))",
        },
        cream: "hsl(var(--obs-cream))",
        parchment: "hsl(var(--obs-parchment))",
        obsidian: "hsl(var(--obs-obsidian))",
        charcoal: "hsl(var(--obs-charcoal))",
        ink: "hsl(var(--obs-ink))",
        obs: {
          terracotta: "hsl(var(--obs-terracotta))",
          honeybee: "hsl(var(--obs-honeybee))",
          gold: "hsl(var(--obs-gold))",
          "gold-hover": "hsl(var(--obs-gold-hover))",
          "editorial-blue": "hsl(var(--obs-editorial-blue))",
          love: "hsl(var(--obs-love))",
          "love-soft": "hsl(var(--obs-love-soft))",
          crimson: "hsl(var(--obs-crimson))",
          canvas: "hsl(var(--obs-canvas))",
          cream: "hsl(var(--obs-cream))",
          parchment: "hsl(var(--obs-parchment))",
          black: "hsl(var(--obs-black))",
          obsidian: "hsl(var(--obs-obsidian))",
          charcoal: "hsl(var(--obs-charcoal))",
          ink: "hsl(var(--obs-ink))",
          950: "hsl(var(--obs-neutral-950))",
          900: "hsl(var(--obs-neutral-900))",
          800: "hsl(var(--obs-neutral-800))",
          700: "hsl(var(--obs-neutral-700))",
          600: "hsl(var(--obs-neutral-600))",
          500: "hsl(var(--obs-neutral-500))",
          400: "hsl(var(--obs-neutral-400))",
          300: "hsl(var(--obs-neutral-300))",
          200: "hsl(var(--obs-neutral-200))",
          100: "hsl(var(--obs-neutral-100))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [tailwindcssAnimate],
};

export default obsessTailwindPreset;
