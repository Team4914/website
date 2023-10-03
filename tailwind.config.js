export default {
  daisyui: {
    themes: [
      {
        mytheme: {
    
          "primary": "#dc2626",
          
          "secondary": "#fca5a5",
                   
          "accent": "#d97706",
                   
          "neutral": "#e5e7eb",
                   
          "base-100": "#374151",
                   
          "info": "#e11d48",
                   
          "success": "#ffe4e6",
                   
          "warning": "#f59e0b",
                   
          "error": "#e11d48",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
    theme: {
      extend: {},
    },
  purge: ["./index.html",'./src/**/*.{svelte,js,ts}'], //for unused css
  variants: {
    extend: {},
  },
  darkmode: false, // or 'media' or 'class'
}

