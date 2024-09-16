// @ts-check
import antfu from '@antfu/eslint-config';
import eslintPluginJsxA11y from 'eslint-plugin-jsx-a11y';

export default antfu({
  stylistic: false,
  toml: false,
  test: false,
  markdown: false,
  astro: true,

  unicorn: {
    allRecommended: true,
  },
  rules: {
    'unicorn/filename-case': [
      'error',
      {
        cases: {
          camelCase: true,
          pascalCase: true,
        },
      },
    ],
    'unicorn/prevent-abbreviations': 'off',
  },
}).append(eslintPluginJsxA11y.flatConfigs.recommended);
