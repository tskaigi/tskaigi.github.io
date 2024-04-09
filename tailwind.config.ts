import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./constants/index.ts"
  ],
  theme: {
    colors: {
      white: "#fdfdfd",
    },
    extend: {
      backgroundImage: {
        my_bg_image: "url('../public/background.png')",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        darkTheme: {
          "color-scheme": "dark",
          primary: "#93E7FB",
          "primary-content": "#384575",
          secondary: "#65E0B8",
          accent: "#ffe999",
          neutral: "#3b8ac4",
          "base-100": "#345da7",
          info: "#2563eb",
          success: "#81CFD1",
          warning: "#EFD7BB",
          error: "oklch(73.95% 0.19 27.33)",
        },
        // lightTheme: {
        //   "color-scheme": "light",
        //   "primary": "#3178C6", //done
        //   "primary-content": "#c5d9f2", //done
        //   "secondary": "#23CAFF", //done
        //   "accent": "#EAE686", //done
        //   "neutral": "#021431",
        //   "base-100": "#fdfdfd", //done
        //   "base-200": "#F2F7FF",
        //   "base-300": "#E3E9F4",
        //   "base-content": "#384575", //done
        //   "info": "#93E7FB",
        //   "success": "#81CFD1",
        //   "warning": "#EFD7BB",
        //   "error": "#E58B8B",
        // },
      },
    ], // false: only light + dark | true: all themes | array: specific themes like this ["light", "dark", "cupcake"]
    base: true, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
    themeRoot: ":root", // The element that receives theme color CSS variables
  },
};
export default config;
