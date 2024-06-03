/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        montserrot: 'Montserrat, sans-serif',
      },
      fontWeight: {
        normal: 400,
        medium: 500,
        bold: 600,
        bolder: 700
      },
      fontFamily: {
        montsertrot: 'Montserrat, sans-serif',
      },
      fontSize: {
        xxl: '53px',
        xl: '40px',
        xlg: '24px',
        lg: '20px',
        xmd: '18px',
        'btnmd': '17px',
        md: '16px',
        xs: '14px',
        xxs: '12px',
      },

      colors: {
        primary: '#051D3F',
        secondary: '#DFBD56',
        tertiary: '#263238',
        purple: '#244370',
        Darkpurple: '#112849',
        'secondary-variant': '#4D5053',
        'tertiary-variant': '#757575',

        'primary-light': '#222222',
        'secondary-light': '#9F9F9F',
        'tertiary-light': '#DFBD5614',

        'primary-dark': '#1A265C',


        white: '#ffffff',
        text: '#000000',

      }
    },
  },
  plugins: [],
};
