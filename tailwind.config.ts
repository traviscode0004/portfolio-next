/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // For the Next 15 App Router:
    "./app/**/*.{js,ts,jsx,tsx}",
    // If you ever place components outside 'app':
    "./components/**/*.{js,ts,jsx,tsx}",
    // If you still use the /pages directory:
    "./pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        reactColor: "#61dafb",
        qlColor: "#e00098",
        dbColor: "#13aa52",
        jColor: "#EFD81D",
        aiColor: '#FFA500'
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
};
