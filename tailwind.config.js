module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    container: {
      center: true,
    },
    screens: {
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1440px",
    },
    extend: {},
    colors: {
      primary: "#5841DA",
      success1: "#8DC400",
      success2: "#5F9E00",
      error: "#DB0000",
      body: "#f0f0f0",
      white: "#fff",
      color1: "#F0EDFF",
      color2: "#454545",
      color3: "#292929",
      color4: "#707070",
      color5: "#B0B0B0",
    },
  },
  plugins: [],
};
