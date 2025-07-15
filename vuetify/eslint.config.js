import vuetify from 'eslint-config-vuetify';

export default vuetify([
  {
    rules: {
      'semi': ['warn', 'always'],
      '@stylistic/semi': 'off',
      'perfectionist/sort-imports': 'off',
    },
  },
  {
    files: ['**/*.vue'],
    rules: {
      'vue/script-indent': ['error', 2, {
        baseIndent: 0,
        switchCase: 0,
      }],
    },
  },
]);
