/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,md,njk}"],
  theme: {
    extend: {
      'colors':{
        'etgra': {
          'border': {
            'DEFAULT': '#0e7490',
            'start': '#22d3ee',
            'end': '#0e7490',
          }
        }
      }
    },
  },
  plugins: [],
}
