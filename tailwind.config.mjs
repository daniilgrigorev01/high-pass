import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
  plugins: [
    import('@tailwindcss/forms'),
    import('@tailwindcss/container-queries'),
  ],
  content: ['./src/**/*.{astro,ts}'],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', ...defaultTheme.fontFamily.sans],
        unbounded: ['Unbounded Variable', ...defaultTheme.fontFamily.sans],
      },
    },
  },
};
