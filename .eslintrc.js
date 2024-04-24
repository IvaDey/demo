module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'airbnb',
    'plugin:import/typescript',
    'plugin:@typescript-eslint/recommended',
    'plugin:@tsed/recommended',
  ],
  plugins: ['@typescript-eslint', 'deprecation', '@tsed'],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    project: './tsconfig.json',
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {
        // always try to resolve types under `<root>@types` directory even it doesn't contain any source code,
        // like `@types/unist`
        alwaysTryTypes: true,
      },
    },
  },
  env: {
    node: true,
    es6: true,
  },
  rules: {
    'import/no-extraneous-dependencies': 'error',
    indent: ['error', 2, { SwitchCase: 1, ignoredNodes: ['PropertyDefinition'] }],
    quotes: ['error', 'single', { allowTemplateLiterals: true }],
    'import/no-absolute-path': ['error'],
    'no-underscore-dangle': 'error',
    'prefer-destructuring': ['error', {
      array: false,
      object: true,
    }, {
      enforceForRenamedProperties: false,
    }],
    'comma-dangle': 'error',
    'no-param-reassign': 'warn',
    'no-console': 'warn',
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['error'],
    'max-len': ['error', {
      code: 120,
      ignoreTemplateLiterals: true,
      ignoreRegExpLiterals: true,
      ignoreUrls: true,
    }],
    'lines-between-class-members': [
      'error',
      'always',
      { exceptAfterSingleLine: true },
    ],
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': ['error'],
    'deprecation/deprecation': 'warn',
    'no-plusplus': 0,
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        ts: 'never',
        tsx: 'never',
      },
    ],
    'no-restricted-syntax': 0,
    'class-methods-use-this': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    'no-restricted-exports': 0,
    'func-names': 0,
    'import/prefer-default-export': 'off',
    'no-void': ['error', { allowAsStatement: true }],
  },
};
