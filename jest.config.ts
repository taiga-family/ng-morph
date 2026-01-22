import {type Config} from 'jest';

const config: Config = {
    preset: '@taiga-ui/jest-config',
    testMatch: ['<rootDir>/**/*.spec.ts'],
    modulePathIgnorePatterns: ['<rootDir>/package.json'],
};

export default config;
