module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        "2xl": "1400px",
      },
      fontFamily: {
        rubik: "'Rubik', sans-serif",
        poppins: "'Poppins', sans-serif",
        ptserif: "'PT Serif', serif",
      },
      colors: {
        primary: {
          light: "#6A7678",
          DEFAULT: "#374548",
          dark: "#223134",
        },
      },
      gridAutoRows: {
        "273px": "minmax(0, 273px)",
      },
      backgroundImage: (theme) => ({
        "product-wedeal": "url('../public/images/productwedeal.jpg')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
