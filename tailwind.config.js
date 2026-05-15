/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  corePlugins: {
    preflight: false, // keep existing index.css reset intact
  },
  theme: {
    extend: {
      fontFamily: {
        sans:  ['Zekton', 'system-ui', 'sans-serif'],
        serif: ['Zekton', 'system-ui', 'sans-serif'],
        mono:  ['Zekton', 'system-ui', 'sans-serif'],
      },
      colors: {
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        // shadcn CSS-variable colours (used by Card, CardDecorator, etc.)
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        border: 'hsl(var(--border))',
      },
    },
  },
  plugins: [
    require('@tailwindcss/container-queries'),
  ],
}
