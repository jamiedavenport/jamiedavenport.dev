const defaultTheme = require('tailwindcss/defaultTheme')
const colours = require('tailwindcss/colors')

module.exports = {
  darkMode: 'class',
  important: true,
  purge: {
    content: [
      './components/**/*.{js,ts,jsx,tsx}',
      './pages/**/*.{js,ts,jsx,tsx}',
      './lib/posts.ts',
      './posts/*.mdx',
    ],
  },
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      flex: {
        2: '2 2 0%',
      },
      textColor: {
        github: '#211F1F',
        twitter: '#55ACEE',
        linkedin: '#0077B5',
        rss: '#F99000',
        dev: '#0A0A0A',
      },
      colors: {
        code: {
          green: '#b5f4a5',
          yellow: '#ffe484',
          purple: '#d9a9ff',
          red: '#ff8383',
          blue: '#93ddfd',
          white: '#fff',
        },
        cyan: colours.cyan,
      },

      typography: (theme) => ({
        dark: {
          css: {
            color: theme('colors.gray.100'),

            a: {
              color: theme('colors.blue.300'),
              '&:hover': {
                color: theme('colors.blue.400'),
              },
            },

            h1: {
              color: theme('colors.gray.200'),
            },

            h2: {
              color: theme('colors.gray.200'),
            },

            h3: {
              color: theme('colors.gray.200'),
            },

            code: {
              color: theme('colors.gray.300'),
            },
          },
        },
      }),
    },
  },
  variants: {
    extend: {
      typography: ['dark'],
      translate: ['dark'],
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
