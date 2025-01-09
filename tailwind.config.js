/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js,jsx,ts,tsx}',
    './public/index.html',
    'node_modules/flowbite-react/lib/esm/**/*.js'
  ],
  theme: {
    extend: {
      fontFamily: {
        almarai: ['Almarai', 'sans-serif'],
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to right, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.5) 50%, rgba(0, 0, 0, 0) 100%)',
        'custom-gradient-2': 'linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.5) 50%, rgba(0, 0, 0, 0) 100%)'
      },
      backgroundSize: {
        '120-auto': '100% 100%',
      },
      backgroundPosition: {
        'center-center': 'center center',
      },
      backgroundSize: {
        '150': '100%', // Ajoute une taille personnalisée pour background-size
      },
      backgroundPosition: {
        '30-30': '10% 20%', // Ajoute une position personnalisée
      },
      borderRadius: {
        'custom-20': '20px',
      },
      colors: {
        'custom-border': '#64E7D2',
      },
      fontWeight: {
        'custom-light': 900,
      },
    },
  },
  plugins: [
    require('flowbite/plugin'),

  ],
}

