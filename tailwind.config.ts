import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        civic: {
          50: "#f0f7ff",
          100: "#e0effe",
          200: "#bae0fd",
          300: "#7cc5fb",
          400: "#36a4f7",
          500: "#0c86eb",
          600: "#026ac9",
          700: "#0354a2",
          800: "#074785",
          900: "#0c3c6f",
          950: "#07264a",
        },
        navy: {
          800: "#1e293b",
          900: "#0f172a",
          950: "#0a0f1d",
        },
        status: {
          open: "#dc2626", // Red
          high: "#ea580c", // Orange
          progress: "#d97706", // Amber / Yellow
          resolved: "#059669", // Emerald Green
          critical: "#b91c1c", // Dark Red
        },
      },
      animation: {
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "ping-slow": "ping 2s cubic-bezier(0, 0, 0.2, 1) infinite",
      },
    },
  },
  plugins: [],
};
export default config;
