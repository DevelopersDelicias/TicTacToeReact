module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    // 'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
    quotes: ['error', 'single', { avoidEscape: false }],
    'comma-dangle': ['error', 'always-multiline'],
    'max-len': [
      'error',
      {
        code: 120,
        ignoreUrls: true,
        tabWidth: 2,
      },
    ],
    semi: ['error', 'never'],
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
}
