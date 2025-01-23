import type { Config } from "tailwindcss";

export default {
  darkMode:"class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  
    extend: {
    
      fontFamily: {
  			Poppins: 'var(--font-poppins)'
  		},
      backgroundImage:{
        mobile_noir:"url(/mobile.png)",
        mobile_orange:"url(/mobile1.png)",

        tablette_noir:"url(/tablette.png)",
        tablette_orange:"url(/tablette1.png)",

        laptop_noir:"url(/laptop.png)",
        laptop:"url(/fond1.png)",

       
      },
      colors: {
        primar: '#ff4500',
  			second: '#0a0a0a',
  			third: '#ffffff',
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
} satisfies Config;
