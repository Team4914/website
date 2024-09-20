import flattenColorPalette from "tailwindcss/lib/util/flattenColorPalette";

export default {
  daisyui: {
    darkTheme: "dark",
    themes: [
      {
        dark: {
          primary: "#b91c1c",
          secondary: "#facc15",
          accent: "#f59e0b",
          neutral: "#1e2024",
          "base-100": "#191919",
          info: "#abd3ed",
          success: "#3f6212",
          warning: "#92400e",
          error: "#991b1b",
        },
        light: {
          primary: "#b91c1c",
          secondary: "#facc15",
          accent: "#f59e0b",
          neutral: "#1e2024",
          "base-100": "#f9f9f9",
          info: "#abd3ed",
          success: "#3f6212",
          warning: "#92400e",
          error: "#991b1b",
        },
      },
    ],
  },
  plugins: [
    require("daisyui"),
    require("@tailwindcss/typography"),
    addVariablesForColors,
  ],
  theme: {
    extend: {
      animation: {
        scroll:
          "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
      },
      keyframes: {
        scroll: {
          to: {
            transform: "translate(calc(-50% - 0.5rem))",
          },
        },
      },
    },
  },
  content: [
    "./index.html",
    "./src/**/*.{svelte,js,ts,astro}",
    "./src/**/**/*.{svelte,js,ts,astro}",
  ], // Specify the paths for purging unused CSS
  variants: {
    extend: {},
  },
  darkMode: ["class", '[data-theme="dark"]'], // Enable dark mode
};

// This plugin adds each Tailwind color as a global CSS variable, e.g., var(--gray-200).
function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val]),
  );

  addBase({
    ":root": newVars,
  });
}
