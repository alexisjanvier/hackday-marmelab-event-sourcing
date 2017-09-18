module.exports = {
    extends: ['standard'],
    plugins: ['prettier'],
    parser: 'babel-eslint',
    rules: {
        'max-len': ['warn', { code: 150 }],
        'func-names': 'off',
        indent: [
            'error',
            4,
            {
                SwitchCase: 1
            }
        ],
        'no-plusplus': 'off',
        'import/no-named-as-default': 'off',
        'import/prefer-default-export': 'off',
        semi: ['error', 'always']
    }
};
