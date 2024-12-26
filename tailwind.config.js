/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        olive: {
          500: "#808000", // Cor verde oliva claro
          700: "#556B2F", // Cor verde oliva escuro
        },
      },
    },
  },
  plugins: [],
};
