import type { Config } from "tailwindcss";
const colors = require("tailwindcss/colors")

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/component/**/*.{js,ts,jsx,tsx}",
    "./src/container/**/*.{js,ts,jsx,tsx}",
    "./src/modules/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@medusajs/ui/dist/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
      primary: {
        50: "#D9EDBF",
      },
      secondary:{
        50: "#FF9800",
      },
      darkGreen:{
        50: "#2C7865",
      },
      green:{
        50: "#90D26D",
      }
    },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      spacing: {
        container: `max(
			  0.75rem,
			  calc((100vw - calc(1280px - 1rem * 2)) / 2)
			)`,
        "sm-container": `max(
			  1rem,
			  calc((100vw - calc(550px - 1rem * 2)) / 2)
			)`,
      }
    },
  },
  plugins: [],
};
export default config;
