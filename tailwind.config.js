/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      custom: ["Montserrat"]
    },
    extend: {
      boxShadow: {
        custom: "0px 0px 3px 2px rgba(0,0,0,0.1)"
      }
    }
  },
  plugins: []
}
