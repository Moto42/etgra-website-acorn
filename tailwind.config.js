/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

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
          },
          'logo': {
            'bg': '#52525b'
          },
          'link': '#0e7490',
        }
      },
      'fontFamily': {
        'noto-sans': [`"Noto Sans"`, "sans-serif"],
        'playfair-display': [`"Playfair Display"`]
      },
      backgroundImage: {
        'goats-field': 'url: "/images/backgrounds/goats-field.jpg"',
      }
    },
    fontFamily: {
      'sans': [`"Noto Sans"`, ...defaultTheme.fontFamily.sans],
      'serif': [`"Playfair Display"`, ...defaultTheme.fontFamily.serif],
      'mono': [...defaultTheme.fontFamily.mono]
    },
  },
  plugins: [],
}
