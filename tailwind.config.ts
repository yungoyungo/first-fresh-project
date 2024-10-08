import { type Config } from "tailwindcss";

export default {
  content: [
    "{routes,islands,components}/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Dot: ['DotGothic16', 'sans-serif'],
      }
    }
  }
} satisfies Config;
