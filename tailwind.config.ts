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
        "playfair-display": ["var(--font-playfair-display)"],
        "libre-baskerville": ["var(--font-libre-baskerville)"],
        lato: ["var(--font-lato)"],
      },
    },
  },
  plugins: [flowbite.plugin()],
};
export default config;
