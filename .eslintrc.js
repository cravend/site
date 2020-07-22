module.exports = {
  env: {
    browser: true,
    es2020: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
    sourceType: 'module',
    project: './tsconfig.json',
  },
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.jsx', '.tsx'] }],
    'react/jsx-one-expression-per-line': [0],
    'react/no-unescaped-entities': ['error', { forbid: ['>', '}'] }],
    'react/prop-types': [2, { ignore: ['children'] }],
    'import/extensions': [2, { ts: 'never', tsx: 'never' }],
    '@typescript-eslint/restrict-template-expressions': [2, { allowAny: true }],
    '@typescript-eslint/no-unused-vars': [2],
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
      },
    },
  },
};
