/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,ts}'],
  plugins: [
    import('@tailwindcss/forms'),
    import('@tailwindcss/container-queries'),
  ],
};
