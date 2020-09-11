const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true
  },
  purge: ["./components/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Inter", ...defaultTheme.fontFamily.sans],
      serif: ["Source Serif Pro", ...defaultTheme.fontFamily.serif],
      mono: [...defaultTheme.fontFamily.mono]
    },
    extend: {
      colors: {
        "emrg-purple": "#463EA9",
        "emrg-light-purple": "#E3E1FF",
        "emrg-black": "#3B3B3B",
        "emrg-light-grey": "#f7f7f7"
      }
    }
  },
  variants: {
    opacity: ["responsive", "hover", "focus", "group-hover"]
  },
  plugins: []
}
