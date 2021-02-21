module.exports = {
  purge: ["./src/**/*.js", "./src/**/*.jsx", "./src/**/*.ts", "./src/**/*.tsx"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      blue: {
        DEFAULT: '#0075BE',
        dark: '#00588E',
        muted: '#68899C'
      },
      orange: {
        DEFAULT: '#ffc000',
        muted: '#997300'
      },
      diamond: {
        DEFAULT: '#b9f2ff',
        light: '#d2f7ff',
        lighter: '#ecfbff',
        dark: '#00abd2'
      },
      silver: {
        DEFAULT: '#c0c0c0',
        light: '#d9d9d9',
        dark: '#a6a6a6'
      },
      secondary: {
        DEFAULT: '#ffc000',
        light: '#ffd34d',
        lighter: '#ffe080',
        lightest: '#fff9e5'
      },

      // Grays and Neutrals
      gray: {
        DEFAULT: '#4A4A4A',
        light: '#CCCCCC',
        lighter: '#E0E0E0',
        lightest: '#F1F1F1',
        mid: '#8E8E8E',
        dark: '#333333'
      },

      white: '#FFFFFF',
      black: '#000',
      red: '#a51b00',
    },
    extend: {
      boxShadow: {
        diamond: '8px 8px 0 0 #b9f2ff, -8px -8px 0 0 #b9f2ff',
        'diamond-light': '8px 8px 0 0 #fff9e5, -8px -8px 0 0 #fff9e5'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
