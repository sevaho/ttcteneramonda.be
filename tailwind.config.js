/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./hugo_stats.json"],
  theme: {
    extend: {
      colors: {
        // PRIMARY (base: 2b6daf)

        // PRIMARY (base: #011a32)
        'primary-50': '#b2cae2',
        'primary-100': '#2b6daf',
        'primary-200': '#023464',

        // ACCENT (base: #9f302c)
        'accent-100': '#CD4F4A',
        'accent-200': '#c73c37',
      }
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["emeral","nord", "lemonade"],
  },
}
