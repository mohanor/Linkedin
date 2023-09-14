import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      screens: {
        'xl1': '780px',
        'xl2': '1284px',

      },
      shadow: {
        'custom': [
          '0px 0px 1px 0px rgba(0, 0, 0, 0.12)'
          , '0px 0px 2px 0px rgba(0, 0, 0, 0.14)'
        ]
      }
    },
  },
  plugins: [],
}
export default config
