const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: ["./components/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
      flex: {
        2: "2 2 0%",
      },
      textColor: {
        github: "#211F1F",
        twitter: "#55ACEE",
        linkedin: "#0077B5",
      },
    },
  },
  variants: {},
  plugins: [require("@tailwindcss/typography")],
};
