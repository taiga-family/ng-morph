import {resolve} from 'node:path';

import {type Config} from 'jest';

const config: Config = {
    preset: '@taiga-ui/jest-config',
    testMatch: ['<rootDir>/**/*.spec.ts'],
    modulePathIgnorePatterns: ['<rootDir>/package.json'],
    setupFilesAfterEnv: [
        resolve(
            process.cwd(),
            // TODO: need improve @taiga-ui/testing setup file
            './node_modules/@taiga-ui/testing/esm2022/setup-jest/index.mjs',
        ),
    ],
};

export default config;
