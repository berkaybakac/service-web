/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}', './public/**/*.md'],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#0f1117',
          light: '#1e1f25',
          contrast: '#ffffff',
        },
      },
    },
  },
  darkMode: 'media',
  plugins: [],
};
