import { defineConfig } from 'tailwindcss/helpers';

export default defineConfig({
  content: [
    './src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter Variable", "ui-sans-serif", "system-ui", "sans-serif", "Apple Color Emoji"],
      },
      colors: {
        primary: "#f67280",
        "primary-content": "#101828",
        complementary: "#355c7d",
      },
      backgroundImage: {
        noise: "linear-gradient(to bottom, rgba(15,23,42,0.5), rgba(15,23,42,0.9)), url('/images/noise.png')",
      },
    },
  },
  plugins: [],
});
