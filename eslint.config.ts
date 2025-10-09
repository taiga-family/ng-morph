import taiga from '@taiga-ui/eslint-plugin-experience-next';
import {globalIgnores} from 'eslint/config';

export default [
    ...taiga.configs.recommended,
    globalIgnores(['*.js', '**/*.js', '.angular', '.release-it.js']),
    {
        files: ['**/*.ts'],
        rules: {
            'import/no-cycle': 'off',
        },
    },
];
