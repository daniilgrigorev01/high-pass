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
    'function-disallowed-list': ['rgb', 'hsl'],
    'function-no-unknown': 'ignoreFunctions: ["/theme/"]',
    'declaration-no-important': true,
    'font-weight-notation': 'numeric',
  },
};
