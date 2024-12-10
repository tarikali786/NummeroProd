/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        // Modify the existing shadow-lg
        lg: "0 0 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
        // sm: "0 0 5px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
        // xl: "0 0 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
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
        500: "#29a9e0",
        600: " #121127",
        100: "#F4F6FA",
      },
      bgBlue: {
        500: "#0a0316",
        400: "#f6f5f4",
        300: "f0f0f0",
      },
      white: {
        500: "#FFFFFF",
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
      },
    },
  },
  plugins: [],
};
