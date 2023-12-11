module.exports = {
  preset: '@vue/cli-plugin-unit-jest/presets/typescript-and-babel',
  testEnvironment: 'jsdom',
  moduleFileExtensions: ['vue', 'js', 'json', 'jsx', 'ts', 'tsx', 'mjs'],
  setupFilesAfterEnv: ['./tests/setup.ts'],
  transform: {
    '^.+\\.(ts|tsx)?$': 'babel-jest',
    '^.+\\.vue$': '@vue/vue3-jest',
    '^.+\\.mjs$': 'babel-jest',
  },
  transformIgnorePatterns: ['node_modules/(?!vuetify)'],
  testEnvironmentOptions: {
    customExportConditions: ['node', 'node-addons'],
  },
}
