/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        OjahDisplayBlack: ["OjahDisplayBlack"],
        OjahDisplayBold: ["OjahDisplayBold"],
        OjahDisplaySemiBold: ["OjahDisplaySemiBold"],
      },
      fontSize: {
        8: "8px",
        10: "10px",
        11: "11px",
        12: "12px",
        13: "13px",
        14: "14px",
        16: "16px",
        20: "20px",
        22: "22px",
        26: "26px",
        32: "32px",
        48: "48px",
      },
    },
  },
  plugins: [
    require("flowbite/plugin")({
      charts: true,
    }),
  ],
};
