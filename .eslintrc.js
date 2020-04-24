module.exports = {
  extends: [
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
    'airbnb-typescript',
  ],
  parserOptions: {
    project: "./tsconfig.json",
  },
  rules: {
    // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
    // e.g. "@typescript-eslint/explicit-function-return-type": "off",
    'react/jsx-one-expression-per-line': 'off',
    'react/no-array-index-key': 'off',
    'operator-linebreak': 'off',
    'react/prop-types': 'off',
  }
};
