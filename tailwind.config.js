/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        bg: {
          top: "#111b17",
          mid: "#16231d",
          bottom: "#0c110e",
        },

        forest: {
          950: "#070b09",
          900: "#0d1411",
          800: "#121c17",
          700: "#1a2821",
          600: "#24362d",
          500: "#31473d",
          400: "#435b50",
        },

        bark: {
          900: "#191411",
          800: "#241c17",
          700: "#332821",
          600: "#4a382d",
          500: "#645042",
        },

        moss: {
          900: "#151c16",
          800: "#1d261f",
          700: "#27342b",
          600: "#3b4c40",
          500: "#536557",
        },

        text: {
          main: "#e8ecdf",
          soft: "#bec7ba",
          muted: "#97a093",
          dark: "#0a0d0b",
        },

        line: {
          soft: "rgba(232, 236, 223, 0.08)",
          mid: "rgba(232, 236, 223, 0.14)",
          strong: "rgba(232, 236, 223, 0.22)",
        },

        accent: {
          gold: "#c9b27a",
          warm: "#a99569",
          glow: "rgba(177, 193, 154, 0.16)",
          deep: "#60715a",
          mist: "rgba(210, 220, 204, 0.06)",
        },
      },

      fontFamily: {
        sans: ['"Noto Sans JP"', "system-ui", "sans-serif"],
        display: ['"Cormorant Garamond"', '"Noto Serif JP"', "serif"],
      },

      letterSpacing: {
        hero: "0.14em",
        wide: "0.08em",
        calm: "0.04em",
        label: "0.18em",
      },

      backgroundImage: {
        "gecko-depth":
          "linear-gradient(180deg, #111b17 0%, #16231d 34%, #171b15 68%, #0c110e 100%)",

        "gecko-depth-soft":
          "linear-gradient(180deg, #15211c 0%, #182720 38%, #161a15 72%, #0d120f 100%)",

        "forest-mist":
          "radial-gradient(circle at 50% 18%, rgba(126,146,116,0.12) 0%, rgba(126,146,116,0.04) 24%, transparent 44%)",

        "forest-bloom":
          "radial-gradient(circle at 22% 18%, rgba(108,132,98,0.12) 0%, transparent 34%), radial-gradient(circle at 82% 72%, rgba(172,149,108,0.10) 0%, transparent 28%)",

        "humidity-film":
          "linear-gradient(180deg, rgba(255,255,255,0.038) 0%, rgba(255,255,255,0.012) 34%, rgba(255,255,255,0) 100%)",

        "readability-left":
          "linear-gradient(90deg, rgba(7,10,8,0.82) 0%, rgba(7,10,8,0.48) 42%, rgba(7,10,8,0.12) 74%, rgba(7,10,8,0) 100%)",

        "readability-bottom":
          "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(4,6,5,0.18) 38%, rgba(4,6,5,0.62) 100%)",
      },

      boxShadow: {
        soft: "0 10px 30px rgba(0,0,0,0.22)",
        deep: "0 18px 60px rgba(0,0,0,0.34)",
        mist: "0 0 40px rgba(120, 140, 110, 0.08)",
        card: "0 18px 50px rgba(0,0,0,0.18)",
        float: "0 14px 28px rgba(0,0,0,0.20)",
      },

      borderRadius: {
        shell: "1.25rem",
        flow: "2rem",
        card: "1.5rem",
      },

      transitionTimingFunction: {
        organic: "cubic-bezier(0.22, 1, 0.36, 1)",
      },

      blur: {
        xs: "2px",
      },

      maxWidth: {
        reading: "36em",
        measure: "68rem",
      },
    },
  },
  plugins: [],
};