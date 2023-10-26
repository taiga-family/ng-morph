/* eslint-disable */
process.env.NODE_OPTIONS = '--experimental-vm-modules';

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
    extensionsToTreatAsEsm: ['.ts'],
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
    coverageDirectory: '../../coverage/libs/ng-morph',
    transformIgnorePatterns: ['node_modules/(?!minimatch/.*)'],
    bail: true,
};
