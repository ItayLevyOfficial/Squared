module.exports = {
  mode: 'jit',
  purge: ['./public/**/*.html', './src/**/*.{js,jsx,ts,tsx,vue}'],
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        black: '#000000',
        dark: '#52057B',
        lightDark: '#892CDC',
        primary: '#BC6FF1',
        white: '#ffffff',
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
