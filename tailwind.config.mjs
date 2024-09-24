import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
  plugins: [
    import('@tailwindcss/forms'),
    import('@tailwindcss/container-queries'),
  ],
  content: ['./src/**/*.{astro,ts}'],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      gray: {
        50: 'oklch(100% 0 0)',
        100: 'oklch(93.4% 0 0)',
        200: 'oklch(83.9% 0 0)',
        300: 'oklch(68.3% 0 0)',
        400: 'oklch(40.91% 0 0)',
        500: 'oklch(24.35% 0 0)',
      },
      brand: {
        50: 'oklch(90.17% 0.055 45.162)',
        100: 'oklch(68.23% 0.171 22.71)',
        200: 'oklch(70.81% 0.191 41.25)',
        300: 'oklch(64.67% 0.239 27.18)',
        400: 'oklch(57.57% 0.185 38.21)',
        500: 'oklch(57.56% 0.142 42.35)',
      },
    },
    screens: {
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    extend: {
      fontFamily: {
        roboto: ['Roboto', ...defaultTheme.fontFamily.sans],
        unbounded: ['Unbounded Variable', ...defaultTheme.fontFamily.sans],
      },
    },
  },
};
