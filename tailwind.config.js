// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: [
          '"Montserrat Variable"',
          'ui-sans-serif',
          'system-ui',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"'
        ],
      },
      fontSize: {
        base: ['18px', '32px'], // sets font size to 18px and line height to 32px
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            fontFamily: [
              '"Montserrat Variable"',
              'ui-sans-serif',
              'system-ui',
              'sans-serif',
              '"Apple Color Emoji"',
              '"Segoe UI Emoji"',
              '"Segoe UI Symbol"'
            ].join(', '),
            fontSize: '18px',
            lineHeight: '32px',
            a: {
              color: theme('colors.customPurple'),
              '&:hover': {
                color: theme('colors.accentPro.100'),
              },
            },
          },
        },
        dark: {
          css: {
            fontFamily: [
              '"Montserrat Variable"',
              'ui-sans-serif',
              'system-ui',
              'sans-serif',
              '"Apple Color Emoji"',
              '"Segoe UI Emoji"',
              '"Segoe UI Symbol"'
            ].join(', '),
            fontSize: '18px',
            lineHeight: '32px',
            color: theme('colors.gray.300'),
            a: {
              color: theme('colors.customPurple'),
              '&:hover': {
                color: theme('colors.accentPro.100'),
              },
            },
            h1: { color: theme('colors.gray.100') },
            h2: { color: theme('colors.gray.100') },
            h3: { color: theme('colors.gray.100') },
            h4: { color: theme('colors.gray.100') },
            h5: { color: theme('colors.gray.100') },
            h6: { color: theme('colors.gray.100') },
            strong: { color: theme('colors.gray.100') },
            code: { color: theme('colors.gray.300') },
            figcaption: { color: theme('colors.gray.500') },
            blockquote: {
              color: theme('colors.gray.400'),
              borderLeftColor: theme('colors.gray.700'),
            },
          },
        },
      }),
      colors: {
        customClay: 'hsl(15 63.1% 59.6%)',
        darkClay: '#b6613c',
        customPurple: 'hsl(251 84.6% 74.5%)',
        accentPro: {
          0: 'hsl(251, 84.6%, 74.5%)',
          100: 'hsl(251, 40.2%, 54.1%)',
          200: 'hsl(251, 40%, 45.1%)',
          900: 'hsl(250, 25.3%, 19.4%)',
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms'),
  ],
}
