module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    "plugin:jsx-a11y/recommended",
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', 'jsx-a11y'],
  rules: {
    'jsx-a11y/anchor-is-valid': 'warn',  // Warns on invalid anchor elements
    'jsx-a11y/label-has-associated-control': [ 'error', {
      required: {
        some: ['nesting', 'id']
      }
    }],
    'jsx-a11y/no-static-element-interactions': 'warn',
    'jsx-a11y/alt-text': 'warn',
    'jsx-a11y/aria-role': 'warn',
    'jsx-a11y/interactive-supports-focus': 'error',
    'jsx-a11y/no-noninteractive-element-interactions': 'error',
    'jsx-a11y/no-noninteractive-tabindex': 'error',
    'jsx-a11y/role-has-required-aria-props': 'error',
    'jsx-a11y/no-redundant-roles': 'warn',
    'jsx-a11y/media-has-caption': 'warn',
    'jsx-a11y/mouse-events-have-key-events': 'error',
    'jsx-a11y/no-autofocus': 'warn',
    'jsx-a11y/label-has-for': 'error',
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
    ],
  },
}
