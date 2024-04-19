/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "custom-shadow": "0 0 10px rgba(0, 0, 0, 0.1)",
        "inset-shadow": "inset 0 3px 10px rgba(0, 0, 0, 0.1)",
      },
    },
  },
  plugins: [],
};
