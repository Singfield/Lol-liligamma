module.exports = {
    extends: [
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        'plugin:prettier/recommended',
        'prettier',
    ],
    plugins: ['prettier'],
    env: {
        es6: true,
        node: true,
        browser: true,
    },
    parserOptions: {
        ecmaVersion: 2021,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
        },
    },
    ignorePatterns: ['/node_modules/', '/build/', '/src/reportWebVitals.js'],
    rules: {
        'no-console': 1,
        'no-unused-vars': ['error', { args: 'none', argsIgnorePattern: 'req|res|next|val' }],
        'prettier/prettier': ['error'],
        'react/react-in-jsx-scope': 'off',
    },
    settings: {
        react: {
            version: 'detect',
        },
    },
}