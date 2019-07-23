module.exports = {
    bail: true,
    verbose: true,
    clearMocks: true,
    coverageThreshold: {
        global: {
            branches: 80,
            functions: 80,
            lines: 80,
            statements: -10,
        },
    },
    coveragePathIgnorePatterns: ['/node_modules/', './dist/'],
    testPathIgnorePatterns: ['/node_modules/', './dist/'],
    transform: {
        '^.+\\.js$': 'babel-jest',
    },
};
