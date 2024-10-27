export default {
  preset: "@vue/cli-plugin-unit-jest",
  testEnvironment: "jsdom",
  moduleFileExtensions: ["js", "json", "vue"],
  transform: {
    "^.+\\.vue$": "@vue/vue3-jest",
    "^.+\\.js$": "babel-jest",
  },
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1", // Use <rootDir> for absolute paths
  },
  testMatch: ["**/tests/**/*.spec.(js|ts)", "**/__tests__/*.(js|ts)"],
  setupFilesAfterEnv: ["<rootDir>/tests/setup.js"],
  testEnvironmentOptions: {
    customExportConditions: ["node", "node-addons"],
  },
};
