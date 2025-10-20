/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/theming/themes")["light"],
          primary: "#000000",
          secondary: "#4a4a4a",
          accent: "#6b6b6b",
          neutral: "#2a2a2a",
          "base-100": "#ffffff",
          "base-200": "#f5f5f5",
          "base-300": "#e5e5e5",
        },
        dark: {
          ...require("daisyui/src/theming/themes")["dark"],
          primary: "#ffffff",
          secondary: "#b4b4b4",
          accent: "#9a9a9a",
          neutral: "#d4d4d4",
          "base-100": "#1a1a1a",
          "base-200": "#2a2a2a",
          "base-300": "#3a3a3a",
        },
      },
    ],
  },
}

