module.exports = {
  mode: 'jit',
  purge: ['./public/**/*.html', './src/**/*.{js,jsx,ts,tsx,vue}'],
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          '0%': {
            opacity: 0,
          },
          '100%': {
            opacity: 1,
          },
        },
      },
      animation: {
        fadeIn: 'fadeIn 2s ease-in',
      },
      colors: {
        black: '#000000',
        dark: '#4c1d95',
        lightDark: '#892CDC',
        primary: '#BC6FF1',
        white: '#ffffff',
        gold: '#FFD700',
      },
      fontFamily: {
        baloo: ['"Baloo 2"', 'sans-serif'],
        number: ['Red Hat Display'],
      },
      spacing: {
        main: '112rem',
      },
    },
  },
  plugins: [],
}
