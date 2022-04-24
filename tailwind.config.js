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
        zoom: {
          "0%": { transform: "scale(0.8)" },
          "100%": { transform: "scale(1)" },
        },
      },
      animation: {
        appear: "appear cubic-bezier(.25,.8,.25,1) 0.2s 1 forwards",
        zoom: "zoom cubic-bezier(.25,.8,.25,1) 0.2s 1 forwards",
      },
    },
  },
  plugins: [],
};
