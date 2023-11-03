module.exports = {
  root: true,
  extends: '@react-native',
  rules: {
    'react-hooks/exhaustive-deps': 'off',
    'no-duplicate-imports': 'error',
    'prefer-const': 'off',
    radix: 0,
    'react-native/no-unused-styles': 2,
  },
};

// there are tons of other rules as well but for this project its enough
