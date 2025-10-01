/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}"
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: '#D4816F',
        secondary: '#9BA88D',
        tertiary: '#F4E8D8',
        accent: '#6B8E7F',
        background: '#FFF8F0',
        'text-dark': '#2C3E2F',
        'text-light': '#B8AFA5',
      },
    },
  },
  plugins: [],
}