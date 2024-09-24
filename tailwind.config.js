/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./hugo_stats.json"],
  theme: {
    extend: {
      colors: {

        // PRIMARY
        'primary-green-1': '#51a37a',
        'primary-green-2': '#408362',
        // SECONDARY
        'secondary-green-1': '#b7d0c4',
        // ACCENT
        'accent-1': '#89b29e',
        'accent-2': '#5e905f',
      }
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "dark", "dim", "nord", "winter", "corporate"],
  },
}
