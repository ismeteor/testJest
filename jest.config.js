const {defaults} = require('jest-config');
// module.exports = {
//   collectCoverageFrom: ['src/**/*.{js,jsx,mjs}'],
//   preset: 'ts-jest',
// 	testMatch: ['<rootDir>/test/**/__tests__/**/*.{js,jsx,mjs}', '<rootDir>/test/**/?(*.)(spec|test).{js,jsx,mjs}'],
// 	transform: {
// 		'^.+\\.(js|jsx|mjs)$': '<rootDir>/test/jest-transform.js'
// 	},
// 	transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.(js|jsx|mjs)$']
// };
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
};