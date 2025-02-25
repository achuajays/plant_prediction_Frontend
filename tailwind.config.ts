
import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    extend: {
      colors: {
        border: "#e2e8f0",
        input: "#e2e8f0",
        leaf: {
          50: "#f2f8f2",
          100: "#e6f1e6",
          200: "#bfd6bf",
          300: "#99bb99",
          400: "#4d864d",
          500: "#006400",
          600: "#005a00",
          700: "#004b00",
          800: "#003c00",
          900: "#003100",
        }
      }
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
