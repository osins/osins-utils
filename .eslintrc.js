module.exports = {
    plugins: [
        "@typescript-eslint/eslint-plugin",
        "eslint-plugin-tsdoc"
    ],
    root: true,
    env: {
        browser: true,
        es2022: true,
        jest: true  
    },
    extends: ['standard', 'plugin:@typescript-eslint/recommended'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        project: "./tsconfig.json",
        tsconfigRootDir: __dirname,
        ecmaVersion: 2018,
        sourceType: "module"
    },
    rules: {
        'space-before-function-paren': ['error', 'never'],
        "@typescript-eslint/no-explicit-any": "warn"
    }
}