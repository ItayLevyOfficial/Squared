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
        fadeIn: 'fadeIn 1s ease-in',
      },
      colors: {
        black: '#0A0A0A',
        dark: '#151515',
        lightPrimary: '#FBFCD4',
        primary: '#E6007A',
        white: '#ffffff',
        darkPrimary: '#FBC403',
      },
      fontFamily: {
        baloo: ['"Baloo 2"', 'sans-serif'],
        number: ['Red Hat Display'],
      },
      spacing: {
        main: '112rem',
      },
    },
    borderWidth: {
      min: '0.5px',
    },
  },
  plugins: [],
}
