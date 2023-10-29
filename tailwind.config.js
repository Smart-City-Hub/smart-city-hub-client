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
        }
      },
      animation: {
        'slide_in_bottom': 'slide_in_bottom 1s both',
        'slide_out_bottom': 'slide_out_bottom 1s cubic-bezier(0.895, 0.030, 0.685, 0.220) both'
      }
    },
  },
  daisyui: {
    themes: ["light", "dark", "cupcake"],
  },
  plugins: [require("daisyui")],
};
