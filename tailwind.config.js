/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
   extend: {
  keyframes: {
    bounceSlow: {
      "0%, 100%": { transform: "translateY(0)" },
      "50%": { transform: "translateY(-6px)" },
    },
    fadeIn: {
      "0%": { opacity: "0", transform: "translateY(10px)" },
      "100%": { opacity: "1", transform: "translateY(0)" },
    },
    slideUp: {
      "0%": { opacity: "0", transform: "translateY(50px)" },
      "100%": { opacity: "1", transform: "translateY(0)" },
    },
    wavy: {
      "0%, 100%": {
        borderRadius: "60% 40% 50% 70% / 60% 40% 70% 50%",
      },
      "50%": {
        borderRadius: "50% 60% 40% 80% / 70% 50% 80% 40%",
      },
    },
  },
  animation: {
    bounce: "bounce 1s infinite",
    "bounce-slow": "bounceSlow 2.5s ease-in-out infinite",
    fadeIn: "fadeIn 1s ease-out forwards",
    slideUp: "slideUp 1s ease-out forwards",
    wavy: "wavy 1.5s ease-in-out infinite",
  },
},
  },
  plugins: [],
}
