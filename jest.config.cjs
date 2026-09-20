//const { createDefaultPreset } = require("ts-jest");

//const tsJestTransformCfg = createDefaultPreset().transform;

///** @type {import("jest").Config} **/
/**export default {
  testEnvironment: "jsdom",
  transform: {
    ...tsJestTransformCfg,
  },
}; */

///** @type {import('ts-jest').JestConfigWithTsJest} */
/** module.exports = {
  //preset: 'ts-jest',
  testEnvironment: 'jsdom',
  // Renaming to .cjs if you have "type": "module" in package.json
  setupFilesAfterEnv: ['<rootDir>/jest.setup.cjs'],
  moduleNameMapper: {
    // Handle CSS/Assets that Vite usually handles
    '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
    '\\.(gif|ttf|eot|svg|png)$': '<rootDir>/__mocks__/fileMock.js',
  },
  transform: {
    // Standard ts-jest transform for ts/tsx files
    '^.+\\.tsx?$': ['ts-jest', { tsconfig: 'tsconfig.app.json' }],
  },
}; */

module.exports = {
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.(ts|tsx)$": "babel-jest",
  },
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",

    // ✅ ADD THIS
    "\\.(svg|png|jpg|jpeg|gif|webp)$": "<rootDir>/src/test/fileMock.js",
  },
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.ts"],
};