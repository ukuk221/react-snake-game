module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'airbnb/hooks',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json'],
  },
  plugins: ['react', '@typescript-eslint'],
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    'import/prefer-default-export': 'off',
    'import/extensions': [
      'error',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'react/jsx-filename-extension': [
      'error',
      {
        extensions: ['.jsx', '.tsx'],
      },
    ],
    'react/prefer-stateless-function': 0,
    'func-names': 0,
    'react/react-in-jsx-scope': 'off',
    'no-void': [
      'error',
      {
        allowAsStatement: true,
      },
    ],
    // アロー関数しか受け付けない設定
    'react/function-component-definition': [
      'error',
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],

    'react/self-closing-comp': [
      'error',
      {
        component: true,
        html: true,
      },
    ],
    semi: ['error', 'always'],
    'semi-spacing': ['error', { after: true, before: false }],
    'semi-style': ['error', 'last'],
    'no-extra-semi': 'error',
    'no-unexpected-multiline': 'error',
    'no-unreachable': 'error',
    // src配下にてdevDependenciesのimport許可
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: ['src/**'],
        optionalDependencies: false,
      },
    ],
  },
  settings: {
    'import/resolver': {
      node: {
        paths: ['src'],
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
};
