module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'airbnb-typescript', 'prettier'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    project: './tsconfig.json',
    sourceType: 'module',
  },
  plugins: [
    'react',
    'import',
    '@typescript-eslint',
    'sort-imports-es6-autofix',
    'react-hooks',
  ],
  rules: {
    // TYPESCRIPT
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['error'],
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': ['error'],
    '@typescript-eslint/naming-convention': [
      2,
      { selector: 'typeLike', format: ['PascalCase'] },
      { selector: 'typeAlias', format: ['PascalCase'], suffix: ['Type'] },
      { selector: 'enum', format: ['PascalCase'], prefix: ['E'] },
      { selector: 'enumMember', format: ['camelCase'] },
      { selector: 'interface', format: ['PascalCase'], prefix: ['I'] },
    ],

    // REACT
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-filename-extension': [
      'error',
      { extensions: ['.js', '.jsx', '.ts', '.tsx'] },
    ],
    'react/jsx-sort-props': [
      2,
      {
        callbacksLast: false,
        shorthandFirst: false,
        shorthandLast: false,
        ignoreCase: true,
        noSortAlphabetically: false,
        reservedFirst: ['key', 'ref'],
      },
    ],

    // OTHER
    'sort-imports-es6-autofix/sort-imports-es6': [
      'error',
      { memberSyntaxSortOrder: ['none', 'all', 'single', 'multiple'] },
    ],
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
  },
};
