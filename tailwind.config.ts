import type { Config } from "tailwindcss";
import flowbite from "flowbite-react/tailwind";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      fontFamily: {
        "playfair-display": ["Playfair Display", "sans-serif"],
        "libre-baskerville": ["Libre Baskerville", "sans-serif"],
        lato: ["Lato", "sans-serif"],
      },
    },
  },
  plugins: [flowbite.plugin()],
};
export default config;
