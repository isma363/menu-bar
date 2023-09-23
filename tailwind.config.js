/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#231F20",
        letter: "#fff",
        yellow: "#AA8346",
      },
      textColor: ["active"],
      spacing: {
        400: "400px",
      },
    },
  },
  plugins: [],
};
