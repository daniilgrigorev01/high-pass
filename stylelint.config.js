/** @type {import('stylelint').Config} */
export default {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-rational-order',
    'stylelint-config-html/astro',
  ],
  plugins: ['stylelint-use-nesting'],
  rules: {
    'csstools/use-nesting': ['always', { syntax: 'scss' }],
    'plugin/rational-order': [true, { 'border-in-box-model': true }],
    'color-named': 'never',
    'color-no-hex': true,
    'declaration-no-important': true,
    'selector-max-id': 0,
    'selector-max-type': 0,
    'selector-max-universal': 0,
    'font-weight-notation': 'numeric',
  },
};
