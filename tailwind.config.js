/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'selector',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'base-100':{
          DEFAULT:'#FFFFFF',
          dark:'#1d232a',
        },
        'base-200':{
          DEFAULT:'#F2F2F2',
          dark:'#191e24',
        },
        'base-300':{
          DEFAULT:'#E5E6E6',
          dark:'#15191e'
        }
      },
      keyframes:{
        overlayShow:{
          '0%':{opacity:'0'},
          '100%':{opacity: '1'}
        },
        contentShow:{
          '0%':{opacity: '0',transform: 'translate(-50%, -48%) scale(0)'},
          '100%':{opacity: '1', transform: 'translate(-50%, -50%) scale(1)'}
        }
      },
      animation:{
        overlayShow:'overlayShow 300ms cubic-bezier(0.16, 1, 0.3, 1)',
        contentShow:'contentShow 300ms cubic-bezier(0.16, 1, 0.3, 1)',
      }
    },
  },
  plugins: [require('@tailwindcss/typography')],
}

