/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./sections/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        colors: {
            'digital-color' : '#F24607',
            'network-color' : '#F2A516',
            'education-color' : '#1261A6',
            'space-color' : '#F2809F',
            'ventures-color' : '#F0DEBE'
        }
    },
  },
  plugins: [],
}