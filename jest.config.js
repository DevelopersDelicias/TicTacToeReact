module.exports = {
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: ['./tests/jestSetup.js'],
  collectCoverage: true,
  collectCoverageFrom: ['src/*/*.{js,jsx}'],
}
