import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        canvas: {
          DEFAULT: '#0D1117',
          subtle: '#090D14',
        },
        panel: {
          DEFAULT: '#161B22',
          hover: '#1F242C',
        },
        border: {
          DEFAULT: '#30363D',
          subtle: '#21262D',
          hover: '#484F58',
        },
        text: {
          primary: '#F0F6FC',
          muted: '#8B949E',
          dim: '#6E7681',
        },
        accent: {
          cyan: '#38BDF8',
          emerald: '#22C55E',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['var(--font-jetbrains-mono)', 'ui-monospace', 'monospace'],
      },
      maxWidth: {
        container: '1080px',
      },
      boxShadow: {
        'glow-cyan': '0 0 20px -5px rgba(56, 189, 248, 0.15)',
        'glow-emerald': '0 0 20px -5px rgba(34, 197, 94, 0.15)',
      },
    },
  },
  plugins: [],
};

export default config;
