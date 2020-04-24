module.exports = {
  extends: [
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
    'airbnb-typescript',
    'prettier',
  ],
  parserOptions: {
    project: './tsconfig.json',
  },
  rules: {
    'react/no-array-index-key': 'off',
    'operator-linebreak': 'off',
    'react/prop-types': 'off',
  },
};
