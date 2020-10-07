const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  // TODO: Enable purge with the correct safelist
  // purge: {
  //   enabled: true,
  //   content: [
  //     "./components/**/*.{js,ts,jsx,tsx}",
  //     "./pages/**/*.{js,ts,jsx,tsx}",
  //   ],
  //   options: {
  //     whitelist: [/^text-code/],
  //   },
  // },
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
      colors: {
        code: {
          green: "#b5f4a5",
          yellow: "#ffe484",
          purple: "#d9a9ff",
          red: "#ff8383",
          blue: "#93ddfd",
          white: "#fff",
        },
      },
    },
  },
  variants: {},
  plugins: [require("@tailwindcss/typography")],
};
