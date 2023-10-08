export default {
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#b91c1c", 
          "secondary": "#facc15",
          "accent": "#f59e0b",
          "neutral": "#1e2024",
          "base-100": "#191919",
          "info": "#abd3ed",
          "success": "#3f6212",
          "warning": "#92400e",
          "error": "#991b1b",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
  theme: {
    extend: {},
  },
  purge: ["./index.html", './src/**/*.{svelte,js,ts}'], //for unused css
  variants: {
    extend: {},
  },
  darkmode: false, // or 'media' or 'class'
}

