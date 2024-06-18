/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./resources/**/*.blade.php",
      "./resources/**/*.js",
      "./resources/**/*.vue",
    ],
    theme: {
        colors: {
            'veryDarkNavy': '#0B0D17',
            'lightBlue': '#D0D6F9',
            'white': '#FFFFFF',
        },
        fontFamily: {
            sans: ['"Bellefair"', 'sans'],
            serif: ['"Barlow"', '"BarlowCondensed', 'serif'],
          },
        extend: {
            backgroundImage: {
                'homeMobile': "url('/public/gfx/bg-homeMobile.png')",
                'homeDesktop': "url('/public/gfx/bg-homeDesktop.png')",
                'footer': "url('/public/gfx/footer.svg')",
            }
        },
    },
    plugins: [],
  }
