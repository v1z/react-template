module.exports = {
  extends: ['plugin:react/recommended', 'plugin:@typescript-eslint/recommended', 'prettier'],
  env: { browser: true, node: true, es6: true },
  plugins: ['react', 'jsx-a11y', '@typescript-eslint', 'prettier'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      version: '16.9.0',
    },
  },
  rules: {
    // common JS stuff
    // "complexity": ["warn", 4], // TODO: fix it to work
    'no-console': 'error',
    'no-param-reassign': 'error',
    // TS stuff
    'react/prop-types': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-explicit-any': 'off', // TODO: remove it
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/member-delimiter-style': 'off',
    // react stuff
    'react/jsx-handler-names': 'error', // TODO: fix it to work
    // a11y stuff
    'jsx-a11y/no-static-element-interactions': 'error',
  },
};
