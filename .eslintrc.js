module.exports = {
    parserOptions: {
        ecmaVersion: 2022
    },
    ignorePatterns: ['dist/**', 'jest.config.ts'],
    plugins: ['prettier'],
    extends: ['plugin:prettier/recommended'],
    env: {
        browser: false,
        es2021: true
    },
    rules: {},
    overrides: [
        {
            files: ['*.ts'],
            parser: '@typescript-eslint/parser',
            parserOptions: {
                project: 'tsconfig.json'
            },
            extends: [
                'plugin:@typescript-eslint/recommended',
                'plugin:prettier/recommended'
            ],
            rules: {
                '@typescript-eslint/no-unused-vars': [
                    'error',
                    {
                        argsIgnorePattern: '^_'
                    }
                ],
                '@typescript-eslint/explicit-function-return-type': 2,
                '@typescript-eslint/member-delimiter-style': [
                    0,
                    {
                        multiline: {
                            delimiter: 'none',
                            requireLast: false
                        },
                        singleline: {
                            delimiter: 'comma',
                            requireLast: false
                        }
                    }
                ],
                '@typescript-eslint/no-explicit-any': 2,
                'sort-imports': [
                    'error',
                    {
                        ignoreCase: false,
                        ignoreDeclarationSort: true,
                        ignoreMemberSort: false,
                        memberSyntaxSortOrder: [
                            'all',
                            'single',
                            'multiple',
                            'none'
                        ]
                    }
                ]
            }
        }
    ]
}
