/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50: "#eef1f6",
          100: "#d7deea",
          400: "#3c5480",
          600: "#243e63",
          700: "#1b3358",
          800: "#152747",
          900: "#101d35",
        },
        paper: {
          DEFAULT: "#f6f7fa",
          card: "#ffffff",
        },
        ink: {
          DEFAULT: "#1c2430",
          soft: "#4a5568",
        },
        // Partner page (/partner) tokens. Values live in app/partner/partner.css
        // and switch with prefers-color-scheme for the whole page at once.
        pk: {
          bg: "var(--pk-bg)",
          surface: "var(--pk-surface)",
          sunken: "var(--pk-sunken)",
          ink: "var(--pk-ink)",
          soft: "var(--pk-ink-soft)",
          line: "var(--pk-line)",
          accent: "var(--pk-accent)",
          "accent-ink": "var(--pk-accent-ink)",
          "accent-tint": "var(--pk-accent-tint)",
          btn: "var(--pk-btn-bg)",
          "btn-hover": "var(--pk-btn-hover)",
          "btn-ink": "var(--pk-btn-ink)",
        },
        gold: {
          400: "#e8a23a",
          500: "#d97706",
          600: "#b45f04",
        },
      },
      fontFamily: {
        sans: ["var(--font-public-sans)", "system-ui", "sans-serif"],
        geist: [
          "var(--font-geist)",
          "var(--font-noto-my)",
          "PingFang SC",
          "Hiragino Sans GB",
          "Microsoft YaHei",
          "Noto Sans CJK SC",
          "system-ui",
          "sans-serif",
        ],
      },
      maxWidth: {
        content: "1200px",
      },
      borderRadius: {
        card: "14px",
      },
    },
  },
  plugins: [],
};
