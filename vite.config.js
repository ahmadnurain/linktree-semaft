import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  theme: {
    extend: {
      animation: {
        "glass-effect": "glassEffect 1s ease-in-out forwards",
      },
      keyframes: {
        glassEffect: {
          "0%": { backgroundPosition: "-100% 0" },
          "100%": { backgroundPosition: "100% 0" },
        },
      },
    },
  },
  plugins: [react(), tailwindcss()],
});
