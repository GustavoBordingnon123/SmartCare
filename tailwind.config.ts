import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "darkGreen": "#035142",
        "gray":"#7D828C",
        'mediumBlue': '#141833',
        "darkBlue": "#0F141E",
        "darkBlue-100":"#191E28",
        'yellow': '#FFEB8A',
        'yellow-100': '#EAA625',
        'yellow-200': '#F9C341',
      },
    },
  },
  plugins: [],
};

export default config;
