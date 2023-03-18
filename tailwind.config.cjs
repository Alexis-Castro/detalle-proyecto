/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    fontFamily: {
      sans: ['KoHo', ...defaultTheme.fontFamily.sans]
      // 'monospace': ['Inter var', 'monospace'],
    },
    container: {
      center: true
      // padding: {
      // '2xl': '1rem',
      // }
    },
    extend: {
      keyframes: {
        scale: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.1)' }
        }
      },
      animation: {
        scale: 'scale 0.6s ease infinite alternate',
        text: 'text 5s ease infinite'
      },
      keyframes: {
        text: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'center left',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'center right',
          },
        },
      },
      backgroundImage: {
        'gradient-card': 'linear-gradient(45deg, #4f39fa, #da62c4 30%, hsl(17, 24%, 90%) 60%);',
        360: 'linear-gradient(180deg,rgba(46,229,216,.2),rgba(6,46,81,.7)),url(../src/images/fondo-360.jpg)',
        'homepage-hero-before': 'radial-gradient(100% 68% at 70% 15%,transparent 40%,white 79%),conic-gradient(from 90deg at 1px 1px,rgba(0,0,0,0) 90deg,rgba(202,212,215,.2) 0)',
        'homepage-hero-after': 'linear-gradient(203deg,#010b15 8.4%,#062e51 30.67%,rgb(0 0 0 / 10%) 70.04%,rgba(255,255,255,0) 85%)',
        'before-ramsa': 'linear-gradient(180deg, rgba(6, 46, 81), rgba(25, 29, 35, 0.1) 50%, rgba(25, 29, 35, 0))'
      },
      backgroundPosition: {
        100: '100%'
      },
      colors: {
        'cyan-ak': '#2ee5d8',
        azul: '#062e51',
        amarillo: '#FFF000'
      },
      boxShadow: {
        '3xl': 'rgb(16 254 254 / 32%) 0px 47px 165px, rgb(16 254 254 / 24%) 0px 30.463px 96.6319px, rgb(16 254 254 / 20%) 0px 18.1037px 52.5556px, rgb(16 254 254 / 16%) 0px 9.4px 26.8125px, rgb(16 254 254 / 13%) 0px 3.82963px 13.4444px, rgb(16 254 254 / 8%) 0px 0.87037px 6.49306px',
        card: '0 0.5em 1em -0.125em hsl(0deg 0% 4% / 10%), 0 0 0 1px hsl(0deg 0% 4% / 2%)'
      }
    }
  },
  plugins: []
}
