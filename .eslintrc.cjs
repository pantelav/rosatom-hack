module.exports = {
  root: true,
  env: {
    node: true,
  },
  plugins: ['vue', 'prettier'],
  extends: ['eslint:recommended', 'plugin:vue/vue3-recommended', 'prettier'],
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    // sourceType: 'module',
  },
  rules: {
    'vue/no-v-html': 'off',
    'vue/multi-word-component-names': 'off',
    'prettier/prettier': ['error'],
  },
};
