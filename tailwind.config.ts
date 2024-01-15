import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      "white": "#fdfdfd",
    },
    extend: {
      backgroundImage: {
        'my_bg_image': "url('../public/background.png')",
      }
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          "color-scheme": "dark",
          "primary": "#5ED7E8",
          "primary-content": "#005355",
          "secondary": "#384575",
          "accent": "#EAE686",
          "neutral": "#3b8ac4",
          "base-100": "#345da7",
          "info": "#2563eb",
          "success": "#16a34a",
          "warning": "#d97706",
          "error": "oklch(73.95% 0.19 27.33)",
        },
      },
    ], // false: only light + dark | true: all themes | array: specific themes like this ["light", "dark", "cupcake"]
    base: true, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
    themeRoot: ":root", // The element that receives theme color CSS variables
  },
}
export default config
