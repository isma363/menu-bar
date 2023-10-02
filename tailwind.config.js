/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
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
        // 28: "1.75rem",
        // 10: "0.625rem",
      },
      minWidth: {
        "1/2": "50%",
        "1/3": "33.33%",
        "1/4": "25%",
      },
    },
  },
  plugins: [],
};
