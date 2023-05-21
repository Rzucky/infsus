/* eslint-disable vue/max-len */
module.exports = {
    root: true,
    env: {
        node: true,
    },
    extends: [
        'plugin:vue/essential',
        '@vue/airbnb',
    ],
    parserOptions: {
        requireConfigFile: false,
        parser: 'babel-eslint',
    },
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        indent: ['error', 4],
        'brace-style': ['error', 'allman'],
        'no-throw-literal': 0,
        'max-len': 0,
        'object-shorthand': ['error', 'always'],
        curly: ['error', 'all'],
        quotes: ['error', 'single'],
        'no-restricted-syntax': [
            'error',
            {
                selector: 'LabeledStatement',
                message: 'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.',
            },
            {
                selector: 'WithStatement',
                message: '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.',
            },
        ],
        'no-continue': 0,
        'vue/max-len': ['error', {
            template: 2000,
            code: 120,
            tabWidth: 4,
            ignoreHTMLAttributeValues: true,
            ignoreHTMLTextContents: true,
            ignoreTemplateLiterals: true,
            ignoreComments: true,
        }],
        'no-param-reassign': ['error', { props: false }],
        'linebreak-style': 0,
    },
};
