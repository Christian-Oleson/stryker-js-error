/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
    // Automatically clear mock calls, instances and results before every test
    clearMocks: true,

    // A preset that is used as a base for Jest's configuration
    preset: "ts-jest",

    // A list of paths to modules that run some code to configure or set up the testing framework before each test
    setupFilesAfterEnv: ["@testing-library/jest-dom"],

    // The test environment that will be used for testing
    testEnvironment: "jsdom",
};
