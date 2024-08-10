/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/lib/esm/**/*.js',
  ],
  theme: {
    extend: {
      fontFamily: {
        'raleway-black': ['Raleway-Black', 'sans-serif'],
        'raleway-medium': ['Raleway-Medium', 'sans-serif'],
        'raleway-regular': ['Raleway-Regular', 'sans-serif'],
        'raleway-semibold': ['Raleway-SemiBold', 'sans-serif'],
      },
    },
  },
  plugins: [
    // eslint-disable-next-line no-undef
    require('flowbite/plugin')
  ],
}

