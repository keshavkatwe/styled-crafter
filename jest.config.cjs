/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  roots: ['./src'],
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.ts*'],
  coverageReporters: ['text', 'cobertura', 'html'],
};
