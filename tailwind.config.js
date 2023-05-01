/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'dirty': '#e0ddca',
      'yellow': '#f6cd1b',
      'dark': '#3c3d42',
      'darker': '#2a2a2e',
      'greenish': '#9ccd62',
      'offwhite': '#f6f8e2'
    }
  },
  plugins: [],
}
