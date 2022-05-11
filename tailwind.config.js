module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('/hero.png')",
        "hero-radial-gradient":
          "radial-gradient(at center center, rgba(0, 0, 0, 0.5), rgba(0, 0,0,0))",
        buyRibt: "url('/buy-ribt.png')",
        mintNFT: "url('/mint.png')",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
