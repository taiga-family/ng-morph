import taiga from '@taiga-ui/eslint-plugin-experience-next';

export default [
    ...taiga.configs.recommended,
    {
        files: ['**/*.ts'],
        rules: {'import/no-cycle': 'off'},
    },
    {
        files: ['CHANGELOG.md'],
        rules: {'markdown/heading-increment': 'off'},
    },
];
