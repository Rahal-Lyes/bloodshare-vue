/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],

  theme: {
    extend: {
      fontFamily: {
        sail: ["Sail", "system-ui"],
      },
      colors: {
        "blue-1": "#1e2a4e",
      },
      fontSize: {
        sl: "1.35rem",
      },
    },
  },
  plugins: [],
}
