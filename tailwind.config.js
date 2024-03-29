module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx,}'],
  theme: {
    colors: {
      blue: {
        0: '#e8fbff',
        10: '#d9ecff',
        20: '#caddff',
        30: '#bccfff',
        40: '#adc1ff',
        50: '#9eb3ff',
        60: '#90a5f9',
        70: '#8198eb',
        80: '#738bdc',
        90: '#657ece',
        100: '#5671bf',
        200: '#4764b1',
        300: '#3858a3',
        400: '#274c96',
        500: '#124088',
        600: '#00357b',
        700: '#002a6e',
        800: '#002061',
        900: '#001754',
        dark: '#00588E',
        muted: '#68899C',
      },
      neutral: {
        50: '#eef2ff',
        100: '#d7dbf8',
        200: '#c1c5e1',
        300: '#abafcb',
        400: '#959ab5',
        500: '#80859f',
        600: '#6c718a',
        700: '#585d76',
        800: '#454a62',
        900: '#33384f',
      },
      purple: {
        0: '#ffddff',
        10: '#ffcfff',
        20: '#ffc0ff',
        30: '#ffb2ff',
        40: '#ffa4ff',
        50: '#f195fc',
        60: '#e288ee',
        70: '#d37adf',
        80: '#c46cd0',
        90: '#b65fc2',
        100: '#a751b4',
        200: '#9944a6',
        300: '#8b3799',
        400: '#7d298b',
        500: '#6f197d',
        600: '#620670',
        700: '#540064',
        800: '#470057',
        900: '#3a004b',
      },
      orange: {
        DEFAULT: '#ffc000',
        muted: '#997300',
      },
      diamond: {
        DEFAULT: '#b9f2ff',
        light: '#d2f7ff',
        lighter: '#ecfbff',
        dark: '#00abd2',
      },
      silver: {
        DEFAULT: '#c0c0c0',
        light: '#d9d9d9',
        dark: '#a6a6a6',
      },
      secondary: {
        DEFAULT: '#ffc000',
        light: '#ffd34d',
        lighter: '#ffe080',
        lightest: '#fff9e5',
      },
      gray: {
        DEFAULT: '#4A4A4A',
        light: '#CCCCCC',
        lighter: '#E0E0E0',
        lightest: '#F1F1F1',
        mid: '#8E8E8E',
        dark: '#333333',
      },
      white: '#FFFFFF',
      black: '#000',
      dark: '#1a1a1a',
      red: '#a51b00',
    },
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
      paritySans: ['parity-sans', 'sans-serif'],
      parityDisplay: ['parity-sans-display', 'sans-serif'],
      parityMono: ['parity-sans-mono', 'sans-serif'],
    },
    extend: {
      lineHeight: {
        'extra-tight': '0.7',
      },
      boxShadow: {
        diamond: '8px 8px 0 0 #b9f2ff, -8px -8px 0 0 #b9f2ff',
        'diamond-light': '8px 8px 0 0 #fff9e5, -8px -8px 0 0 #fff9e5',
      },
      keyframes: {
        panelFront: {
          '0%': { top: '10px', left: '10px' },
          '100%': { top: '20px', left: '20px' },
        },
        panelBack: {
          '0%': { top: '20px', left: '20px' },
          '100%': { top: '10px', left: '10px' },
        },
      },
      animation: {
        panelFront: 'panelFront 2s ease-in-out alternate infinite',
        panelBack: 'panelBack 2s ease-in-out alternate infinite',
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            lineHeight: 1.375,
            a: {
              color: theme('colors.blue.400'),
              '&:hover': {
                color: theme('colors.purple.400'),
              },
              textDecoration: 'none',
            },
          },
        },
        xl: {
          css: {
            lineHeight: 1.5,
          },
        },
      }),
    },
  },
  variants: {
    extend: {},
  },
  // eslint-disable-next-line global-require
  plugins: [require('@tailwindcss/typography')],
};
