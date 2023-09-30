/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}",
   './node_modules/tw-elements/dist/js/**/*.js',
  "./node_modules/flowbite/**/*.js" ],
  theme: {
    extend: {
           fontFamily: {
        'ibm': ['IBM Plex Sans'],
        'ibm-light': ['IBM Plex Sans-light'],
        'ibm-medium': ['IBM Plex Sans-medium'],
        'ibm-semiBold': ['IBM Plex Sans-semiBold'],
        'ibm-bold': ['IBM Plex Sans-bold'],

      }
    },
  },
  plugins: [
     require('flowbite/plugin')
  ],
}

