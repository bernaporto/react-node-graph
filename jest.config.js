/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
const { resolve } = require('path');

module.exports = {
  setupFilesAfterEnv: [resolve('./jest.setup.js')],
  preset: 'ts-jest',
  rootDir: './src',
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '\\.css$': resolve('./__mocks__/styleMock.js'),
  },
};
