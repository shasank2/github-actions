module.exports = {
    extends: ['@commitlint/config-conventional'],
    rules: {
        'type-enum': [2, 'always', ['feat', 'fix', 'chore', 'docs', 'style', 'test']],
        'type-case': [2, 'always', 'lowerCase'],
        'type-empty': [2, 'never'],
        // 'subject-case': [2, 'always', 'sentence-case'],
        'subject-empty': [2, 'never'],
        'scope-case': [2, 'always', 'kebab-case'],
    },
    parserPreset: {
        parserOpts: {
            issuePrefixes: ['[EXAMPLE]'],
        },
    },
}