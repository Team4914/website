export default {
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#8c141e",
          "secondary": "#f2b035",
          "accent": "#1db9ac",
          "neutral": "#18342b",
          "base-100": "#171212",
          "info": "#3abff8",
          "success": "#36d399",
          "warning": "#fbbd23",
          "error": "#f87272",
        },
      },
    ],
  },
  plugins: [require("daisyui"), require('@tailwindcss/typography')],
  theme: {
    extend: {},
  },
  purge: ["./index.html", './src/**/*.{svelte,js,ts}'], //for unused css
  variants: {
    extend: {},
  },
  darkmode: false, // or 'media' or 'class'
}

