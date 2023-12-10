module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/vue3-recommended',
    'plugin:import/typescript',
    'plugin:@typescript-eslint/recommended',
    '@vue/airbnb',
    '@vue/typescript/recommended',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  plugins: [
    'import',
    '@typescript-eslint',
  ],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
      typescript: {
        alwaysTryTypes: true,
        project: './',
      },
    },
  },
  rules: {
    'vuejs-accessibility/form-control-has-label': 'off',
    'arrow-parens': ['error', 'as-needed'],
    indent: 'warn',
    camelcase: 'off',
    'import/no-unresolved': [2, { caseSensitive: false }],
    'import/prefer-default-export': 'off',
    'import/no-extraneous-dependencies': 'off',
    'lines-between-class-members': 'off',
    'no-mixed-operators': ['error', { allowSamePrecedence: true }],
    'no-nested-ternary': 'off',
    'no-param-reassign': ['error', {
      props: true,
      ignorePropertyModificationsFor: ['state', 's'],
    }],
    'no-plusplus': 'off',
    'no-shadow': 'off',
    'no-underscore-dangle': ['error', { allowAfterThis: true }],
    'no-unused-expressions': ['error', { allowShortCircuit: true, allowTernary: true }],
    'object-curly-newline': 'off',
    'object-shorthand': ['error', 'always', { avoidQuotes: false }],
    'prefer-destructuring': ['error', { array: false }],
    semi: ['error', 'never'],
    'vue/valid-v-slot': ['error', { allowModifiers: true }],
    'vue/max-attributes-per-line': ['off'],
    'import/extensions': ['error', 'ignorePackages', {
      js: 'never',
      ts: 'never',
    },
    ],
  },
  overrides: [
    {
      files: ['*.ts', '*.vue'],
      rules: {
        'no-undef': 'off',
      },
    },
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)',
      ],
      env: {
        jest: true,
      },
    },
  ],
}
