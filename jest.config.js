/** @type {import('ts-jest').JestConfigWithTsJest} **/
export default {
  preset: "ts-jest",
  testEnvironment: "jest-environment-jsdom",
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest" // Chuyển đổi các file TypeScript
  },
  setupFilesAfterEnv: ["<rootDir>/setupTests.ts"]
}
