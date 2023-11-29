module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    "react-app",
    "plugin:jsx-a11y/recommended"
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', 'jsx-a11y'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    "jsx-quotes": [
      1,
      "prefer-double"
    ],
    "quotes": [
      1,
      "single",
      "avoid-escape"
    ],
    "semi": [
      "error",
      "always"
    ],
    "indent": [
      "error",
      2,
      {
        "SwitchCase": 1,
        "VariableDeclarator": "first",
        "outerIIFEBody": 1,
        "MemberExpression": 1,
        "FunctionDeclaration": {
          "parameters": "first",
          "body": 1
        },
        "FunctionExpression": {
          "parameters": "first",
          "body": 1
        },
        "CallExpression": {
          "arguments": "first"
        },
        "ArrayExpression": 1,
        "ObjectExpression": 1,
        "ImportDeclaration": 1,
        "flatTernaryExpressions": false,
        "ignoreComments": false
      }
    ]
  },
}
