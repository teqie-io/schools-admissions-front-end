module.exports = {
  purge: ['./src/app/**/**/*.{js,jsx,ts,tsx}', './template/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['"Inter"', 'sans-serif']
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
      '1200px': '1199px',
      '1260px': '1259px',
      '1340px': '1339px',
      '1400px': '1401px',
      '1500px': '1501px',
      '1620px': '1621px'
    },
    extend: {
      boxShadow: {
        'main-card': '0rem 0rem 0.5rem rgba(145, 158, 171, 0.24), 0rem 1rem 2rem -0.25rem rgba(145, 158, 171, 0.24)',
        mini: '0rem 0rem 0.125rem rgba(145, 158, 171, 0.24), 0rem 1.25rem 2.5rem -0.25rem rgba(145, 158, 171, 0.24)',
        standart: '0rem 0.5rem 1rem rgba(145, 158, 171, 0.24)',
        light: '0rem 0.063rem 0.125rem rgba(145, 158, 171, 0.24)',
        aproval: '0rem 0.125rem 0.063rem rgba(0, 0, 0, 0.05), 0rem 0rem 0.063rem rgba(0, 0, 0, 0.25)',
        institute: '0rem 0rem 0.125rem rgba(145, 158, 171, 0.24), 0rem 0.75rem 1.5rem rgba(145, 158, 171, 0.24)',
        signature: '0rem 0rem 0.125rem rgba(145, 158, 171, 0.24), 0rem 1rem 2rem -0.25rem rgba(145, 158, 171, 0.24)',
        'bloom-welcome': '0rem 0rem 0.125rem rgba(145, 158, 171, 0.24), 0rem 0.75rem 1.5rem rgba(145, 158, 171, 0.24)',
        'feebook-modal': '0rem 0rem 0.875rem 0rem rgba(34, 60, 80, 0.2)',
        'scholarship-card': '0rem 0rem 1rem 0rem rgba(34, 60, 80, 0.2)',
        'header-button': '0rem 0.25rem 0.25rem rgba(0, 0, 0, 0.25)',
        'bloom-login': ' 0rem 0rem 4rem rgba(145, 158, 171, 0.24), 0rem 1.5rem 3rem rgba(145, 158, 171, 0.24)',
        grade: '0.25rem 0.625rem 1.5rem 0.25rem rgba(34, 60, 80, 0.15)',
        schduled: '0 0 0.125rem rgba(145, 158, 171, 0.24), 0 1rem 2rem -0.25rem rgba(145, 158, 171, 0.24)'
      },
      spacing: {
        69: '15.438rem',
        '70px': '4.375rem',
        100: '6.25rem',
        115: '7.188rem',
        140: '8.75rem',
        180: '11.25rem',
        200: '12.5rem',
        230: '14.375rem',
        370: '23.125rem',
        1100: '68.75rem',
        1400: '87.5rem',
        exam: '57.938rem'
      },
      fontSize: { '10px': '0.625rem', '13px': '0.813rem' },
      colors: {
        'main-blue': '#404EED',
        'main-gray': '#e2e2e2',
        'main-white': '#f4f6f8',
        'main-black': '#212b36',
        'second-gray': '#637381',
        'second-green': '#00664d',
        'second-white': '#e1e3e5',
        'second-blue': '#2f80ed',
        'third-gray': '#9fa9b3',
        'button-disable': '#919eab',
        light: '#E7EAEE',
        'dot-gray': '#8C9196',
        'discord-black': '#2E3338',
        'discord-gray': '#B8BBBE',
        'black-default': '#202223',
        surface: '#F6F6F7',
        'ligther-gray': '#F1F2F3',
        'light-green': '#27C59A'
      },
      borderRadius: {
        '18px': '1.125rem',
        '10px': '0.625rem'
      },
      lineHeight: {
        '18px': '1.125rem'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
