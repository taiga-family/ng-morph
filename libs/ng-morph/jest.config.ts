/* eslint-disable */
import {pathsToModuleNameMapper} from 'ts-jest';
import {resolve} from 'node:path';

process.env.NODE_OPTIONS = '--experimental-vm-modules';

const {compilerOptions} = require(resolve(__dirname, '..', '..', 'tsconfig.json'));

module.exports = {
    displayName: 'ng-morph',
    preset: '../../jest.preset.js',
    globals: {
        'ts-jest': {
            isolatedModules: true,
        },
    },
    testEnvironment: 'node',
    transform: {
        '^.+\\.ts?$': [
            'ts-jest',
            {
                tsconfig: '<rootDir>/tsconfig.spec.json',
                types: ['node'],
                useESM: true,
            },
        ],
    },
    moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
        prefix: `<rootDir>/../../`,
    }),
    extensionsToTreatAsEsm: ['.ts'],
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
    coverageDirectory: '../../coverage/libs/ng-morph',
    transformIgnorePatterns: ['node_modules/(?!minimatch/.*)'],
    bail: true,
};
