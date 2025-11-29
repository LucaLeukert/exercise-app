// https://docs.expo.dev/guides/using-eslint/
const { defineConfig } = require('eslint/config');
const expoConfig = require('eslint-config-expo/flat');
const neverthrow = require('eslint-plugin-neverthrow');

module.exports = defineConfig([
  expoConfig,
  {
    parser: '@typescript-eslint/parser',
    parserOptions: {
      ecmaVersion: 2021,
      sourceType: 'module',
      project: ['./tsconfig.json'],
      tsconfigRootDir: __dirname,
    },
    ignores: ['dist/*'],
    rules: {
      'neverthrow/must-use-result': 'error',
    },
  },
]);
