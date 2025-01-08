/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'nude-brown': {
          light: '#e3c6a0', // light nude brown shade
          DEFAULT: '#d2a679', // main nude brown shade
          dark: '#b58c66',  // dark nude brown shade
        },
      },
    },
  },
  plugins: [],
}

