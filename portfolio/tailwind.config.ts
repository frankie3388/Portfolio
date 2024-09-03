import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/utils/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
          white: "var(--white)",
          black: "var(--black)",
          grey: "var(--grey)",
          primary: {
            100: "var(--primary-100)",
            200: "var(--primary-200)",
            300: "var(--primary-300)",
            400: "var(--primary-400)",
            500: "var(--primary-500)",
            600: "var(--primary-600)",
            700: "var(--primary-700)",
            800: "var(--primary-800)",
            900: "var(--primary-900)",
          },
          customGreen: {
            100: 'var(--green-100)',
            200: 'var(--green-200)',
            300: 'var(--green-300)',
            400: 'var(--green-400)',
            500: 'var(--green-500)',
            600: 'var(--green-600)',
            700: 'var(--green-700)',
            800: 'var(--green-800)',
            900: 'var(--green-900)',
          },
          customPurple: {
            100: 'var(--purple-100)',
            200: 'var(--purple-200)',
            300: 'var(--purple-300)',
            400: 'var(--purple-400)',
            500: 'var(--purple-500)',
            600: 'var(--purple-600)',
            700: 'var(--purple-700)',
            800: 'var(--purple-800)',
            900: 'var(--purple-900)',
          },
          customBlue: {
            100: 'var(--blue-100)',
            200: 'var(--blue-200)',
            300: 'var(--blue-300)',
            400: 'var(--blue-400)',
            500: 'var(--blue-500)',
            600: 'var(--blue-600)',
            700: 'var(--blue-700)',
            800: 'var(--blue-800)',
            900: 'var(--blue-900)',
          },
          customPink: {
            100: 'var(--pink-100)',
            200: 'var(--pink-200)',
            300: 'var(--pink-300)',
            400: 'var(--pink-400)',
            500: 'var(--pink-500)',
            600: 'var(--pink-600)',
            700: 'var(--pink-700)',
            800: 'var(--pink-800)',
            900: 'var(--pink-900)',
          }
      },
      fontFamily: {
        'space-grotesk': ['var(--font-space-grotesk)', 'sans-serif'],
        'poppins': ['var(--font-poppins)', 'sans-serif'],
        'roboto': ['var(--font-roboto)', 'sans-serif']
      },
      keyframes: {
        flicker: {
          '0%, 19.9%, 22%, 62.9%, 64%, 64.9%, 70%, 100%': {
            opacity: '0.99',
            textShadow: `
              -1px -1px 0 rgba(241,90,34, 0.4), 
              1px -1px 0 rgba(241,90,34, 0.4), 
              -1px 1px 0 rgba(241,90,34, 0.4), 
              1px 1px 0 rgba(241,90,34, 0.4), 
              0 -2px 8px, 
              0 0 2px, 
              0 0 5px #ff7e02, 
              0 0 15px #ff4444, 
              0 0 2px #ff7e00, 
              0 2px 3px #000
            `,
          },
          '20%, 21.9%, 63%, 63.9%, 65%, 69.9%': {
            opacity: '0.4',
            textShadow: 'none',
          },
        },
        // slideUp: {
        //   '0%': { opacity: '0', transform: 'translateY(50px)' },
        //   '100%': { opacity: '1', transform: 'translateY(0px)' },
        // },
      },
      animation: {
        flicker: 'flicker 4s linear infinite',
        // slideUp: 'slideUp 3s ease-in forwards',
      },
    },
  },
  plugins: [],
};
export default config;
