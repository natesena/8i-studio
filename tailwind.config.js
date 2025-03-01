/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'beiruti': ['Beiruti', 'sans-serif'],
      },
      colors: {
        primary: {
          green: '#40FD8C',
        },
      },
      fontWeight: {
        'extralight': 200,
        'light': 300,
        'black': 900,
      }
    },
  },
  plugins: [],
}
