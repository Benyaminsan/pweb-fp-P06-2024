/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        custom: {
          beige: "#f5e0b7",
          gold: "#d6ba73",
          green: "#8bbf9f",
          gray: "#857e7b",
          plum: "#59344f",
        },
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

