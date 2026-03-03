import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "deep-space": "#050505",
        "neon-green": "#7fff00",
        "neon-lime": "#adff2f",
        "neon-cyan": "#22c3df",
        "neon-magenta": "#bb1ac4",
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))'
        }
      },
      fontFamily: {
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        "neon-green": "0 0 20px rgba(127, 255, 0, 0.5)",
        "neon-lime": "0 0 20px rgba(173, 255, 47, 0.5)",
        "neon-cyan": "0 0 20px rgba(34, 195, 223, 0.5)",
        "neon-magenta": "0 0 20px rgba(187, 26, 196, 0.5)",
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
      },
      keyframes: {
        "blink-green": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
        "pulse-glow-green": {
          "0%, 100%": {
            boxShadow: "0 0 20px rgba(127, 255, 0, 0.3), 0 0 60px rgba(127, 255, 0, 0.2)",
          },
          "50%": {
            boxShadow: "0 0 40px rgba(127, 255, 0, 0.5), 0 0 80px rgba(127, 255, 0, 0.3)",
          },
        },
        "pulse-glow-lime": {
          "0%, 100%": {
            boxShadow: "0 0 20px rgba(173, 255, 47, 0.3), 0 0 60px rgba(173, 255, 47, 0.2)",
          },
          "50%": {
            boxShadow: "0 0 40px rgba(173, 255, 47, 0.5), 0 0 80px rgba(173, 255, 47, 0.3)",
          },
        },
      },
      animation: {
        "blink-green": "blink-green 1s ease-in-out infinite",
        "pulse-glow-green": "pulse-glow-green 3s ease-in-out infinite",
        "pulse-glow-lime": "pulse-glow-lime 3s ease-in-out infinite",
      },
    }
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
