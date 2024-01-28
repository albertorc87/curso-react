module.exports = {
    testEnvironment: 'jest-environment-jsdom',
    setupFiles: ['./jest.setup.js'],
    transformIgnorePatterns: ["/node_modules/(?!query-string)/"],
    moduleNameMapper: {
        "^animate.css$": "<rootDir>/mocks/animate.css.js",
    },
}