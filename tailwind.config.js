/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        slide_in_bottom: {
          '0%': { 
            transform: 'translateY(82px)',
            opacity: '0' },
          '100%': { 
            transform: 'translateY(0)',
            opacity: '1' },
        },
        slide_out_bottom: {
          '0%': { 
            transform: 'translateY(0)',
            opacity: '1' },
          '100%': { 
            transform: 'translateY(82px)',
            opacity: '0' },
        },
        like_post: {
          '0%': {
            transform: 'scale(1)'
          },
          '25%': {
            transform: 'scale(1.2)'
          },
          '50%': {
            transform: 'scale(.95)'
          },
          '100%': {
            transform: 'scale(1)'
          }
        }
      },
      animation: {
        'slide_in_bottom': 'slide_in_bottom 1s both',
        'slide_out_bottom': 'slide_out_bottom 1s cubic-bezier(0.895, 0.030, 0.685, 0.220) both',
        'like': 'like_post .45s ease-in-out'
      }
    },
  },
  daisyui: {
    themes: ["light", "dark", "cupcake"],
  },
  plugins: [require("daisyui")],
};
