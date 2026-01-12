import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
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
        success: {
          DEFAULT: "hsl(var(--success))",
          foreground: "hsl(var(--success-foreground))",
        },
        difficulty: {
          e: "hsl(var(--difficulty-e))",
          eplus: "hsl(var(--difficulty-e-plus))",
          t: "hsl(var(--difficulty-t))",
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
        // Custom brand colors
        brand: {
          DEFAULT: "hsl(var(--brand))",
          dark: "hsl(var(--brand-dark))",
          outline: "hsl(var(--brand-outline))",
          semitransparent: "hsl(var(--brand-semitransparent))",
        },
        back: "hsl(var(--back))",
        outline: {
          DEFAULT: "hsl(var(--outline))",
          filled: "hsl(var(--outline-filled))",
        },
        "text-default": "hsl(var(--text-default))",
        "text-light": "hsl(var(--text-light))",
        yellow: "hsl(var(--yellow))",
        red: "hsl(var(--red))",
        blue: {
          DEFAULT: "hsl(var(--blue))",
          mid: "hsl(var(--blue-mid))",
          dark: "hsl(var(--blue-dark))",
        },
        "sticky-pink": "hsl(var(--sticky-pink))",
      },
      fontSize: {
        xs: "0.75rem",
        sm: "0.875rem",
        base: "1rem",
        lg: "1.125rem",
        xl: "1.25rem",
        "2xl": "1.5rem",
        "3xl": "2rem",
      },
      fontFamily: {
        mulish: ["Mulish", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        "0": "0rem",
        "1": "0.125rem",
        "2": "0.1875rem",
        "3": "0.25rem",
        "4": "0.3125rem",
        "5": "0.375rem",
        "6": "0.46875rem",
        "7": "0.5rem",
        "8": "0.625rem",
        "9": "0.8125rem",
        "10": "0.9375rem",
        "11": "1rem",
        "12": "1.125rem",
        "13": "1.1875rem",
        "14": "1.25rem",
        "15": "1.875rem",
        "16": "2.5625rem",
        "17": "3rem",
        "18": "3.125rem",
        "19": "4rem",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
