module.exports = {
  content: ["./src/**/*.{html,js}"], theme: {
    extend: {},
  }, daisyui: {
    themes: [
      {
        tvstartheme: {
          primary: "#14b8a6",
          secondary: "#06b6d4",
          accent: "#37cdbe",
          neutral: "#3d4451",
          "base-100": "#FFFFFF",
        },
      },
      "light",
      "cupcake",
    ],
  },
  plugins: [require("daisyui")],
}