/* @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,vue,js,ts}",
    // Add other file types or directories as needed
  ],
  theme: {
    fontFamily: {
      Poppins: ["Poppins"],
    },
    extend: {
      colors: {
        blue: "#009ef7",
        green: "#008000",
        greenLight: "#05a408",
        grayLight: "#f5f8fa",        
        grayDark: "#e5e7e9",        
      },
    },
  },
  plugins: [],
};
