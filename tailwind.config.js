/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary
        white: "#FFFFFF",
        black: "#000000",

        // Secondary Grays
        "light-gray": {
          50: "#F9F9F9",
          100: "#F5F5F5",
          200: "#ECECEC",
          300: "#D9D9D9",
        },
        "dark-gray": {
          700: "#333333",
          800: "#1A1A1A",
          900: "#0F0F0F",
        },
        gray: {
          400: "#999999",
          500: "#808080",
          600: "#666666",
        },

        // Accent (single color - adjust as needed)
        accent: "#4A7CFF", // Example: Blue
      },
      fontFamily: {
        sans: [
          "SF Pro Display",
          "Geist",
          "Inter",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "sans-serif",
        ],
      },
      fontSize: {
        // Hero scales
        "hero-xl": ["72px", { lineHeight: "1.1", letterSpacing: "-1px" }],
        "hero-lg": ["56px", { lineHeight: "1.2", letterSpacing: "-0.5px" }],

        // Section headings
        "h1": ["48px", { lineHeight: "1.2", letterSpacing: "-0.5px", fontWeight: "600" }],
        "h2": ["40px", { lineHeight: "1.3", fontWeight: "600" }],
        "h3": ["32px", { lineHeight: "1.4", fontWeight: "600" }],

        // Body
        "body": ["16px", { lineHeight: "1.6", fontWeight: "400" }],
        "body-lg": ["18px", { lineHeight: "1.6", fontWeight: "400" }],
        "small": ["14px", { lineHeight: "1.5", fontWeight: "400" }],
        "xs": ["13px", { lineHeight: "1.4", fontWeight: "400" }],
      },
      spacing: {
        "gutter": "1rem",
        "section-sm": "40px",
        "section": "60px",
        "section-lg": "120px",
      },
      backdropFilter: {
        "glass": "blur(12px) saturate(140%)",
        "glass-strong": "blur(16px) saturate(140%)",
        "glass-light": "blur(8px) saturate(130%)",
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out",
        "blur-focus": "blurFocus 0.8s ease-out",
        "scale-in": "scaleIn 0.6s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        blurFocus: {
          "0%": { filter: "blur(8px)", opacity: "0" },
          "100%": { filter: "blur(0)", opacity: "1" },
        },
        scaleIn: {
          "0%": { transform: "scale(0.95)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
      },
      transitionDuration: {
        "fast": "150ms",
        "smooth": "300ms",
        "slow": "500ms",
      },
    },
  },
  plugins: [
    function ({ addComponents, theme }) {
      addComponents({
        ".glass": {
          "@apply backdrop-blur-[12px] bg-white/[0.08] border border-white/15 rounded-2xl shadow-sm": {},
        },
        ".glass-button": {
          "@apply backdrop-blur-[12px] bg-white/[0.08] border border-white/15 rounded-xl transition-all duration-300": {},
          "&:hover": {
            "@apply backdrop-blur-[16px] bg-white/[0.12] shadow-lg -translate-y-0.5": {},
          },
        },
        ".glass-dark": {
          "@apply backdrop-blur-[12px] bg-black/[0.1] border border-white/10 rounded-2xl": {},
        },
        ".text-hero": {
          "@apply text-hero-xl font-bold tracking-tight": {},
        },
      });
    },
  ],
};
