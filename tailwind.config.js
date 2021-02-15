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
      secondary: {
        DEFAULT: '#ffc000',
        light: '#ffd34d',
        lighter: 'ffe080',
        lightest: 'fff9e5'
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
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
