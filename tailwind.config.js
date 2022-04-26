module.exports = {
  purge: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        appear: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        disappear: {
          "0%": { opacity: 1 },
          "100%": { opacity: 0 },
        },
        zoom: {
          "0%": { transform: "scale(0.8)", opacity: 0 },
          "100%": { transform: "scale(1)", opacity: 1 },
        },
        zoomout: {
          "0%": { transform: "scale(1)", opacity: 1 },
          "100%": { transform: "scale(0.8)", opacity: 0 },
        },
      },
      animation: {
        appear: "appear linear 0.2s 1 forwards",
        disappear: "disappear linear 0.2s 1 forwards",
        zoom: "zoom ease 0.2s 1 forwards",
        zoomout: "zoomout ease 0.2s 1 forwards",
      },
    },
  },
  plugins: [],
};
