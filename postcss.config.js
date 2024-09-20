// @ts-check
export default {
  plugins: {
    'tailwindcss/nesting': {},
    tailwindcss: {},
    'postcss-preset-env': {
      feature: {
        'nesting-rules': false,
      },
    },
  },
};
