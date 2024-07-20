module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    transform: {
        '^.+\\.vue$': '@vue/vue3-jest',
        '^.+\\.tsx?$': ['ts-jest', { useESM: true }],
        '^.+\\.jsx?$': 'babel-jest',
    },
    extensionsToTreatAsEsm: ['.ts', '.tsx', '.jsx', '.vue'],
    globals: {
        'ts-jest': {
            useESM: true,
        },
    },
    moduleNameMapper: {
        '^axios$': require.resolve('axios'),
        '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    },

};
