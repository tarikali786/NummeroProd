/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        lg: "0 0 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
        spBlue: "2px 2px 6px #29a9e0",
        spYellow: "2px 2px 6px #fcb347",
      },
    },
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      blue: {
        // Brand color
        600: "#121127",
        700: "#0000f5",
        500: "#29a9e0",
        300: "#b47cfd",
        400: "#80c1dc",
        100: "#F4F6FA",
      },
      bgblue: {
        500: "#070110",
        400: "#f6f5f4",
        300: "#090319",
        200: "#8000804d",
        100: "#0b031b",
      },
      white: {
        500: "#FFFFFF",
        400: "#545454",
        300: "#beb8c9",
      },
      black: {
        600: " #1F1F1F",
        500: "#000000",
        400: "#333333",
        300: "#333333cc",
        100: "#dadada",
      },
      yellow: {
        500: "#fcb347",
        400: "#e4bc7e",
      },
      pink: {
        500: "#ff7fc2",
      },
      gray: {
        500: "#0a0118af",
      },
    },
  },
  plugins: [],
};
