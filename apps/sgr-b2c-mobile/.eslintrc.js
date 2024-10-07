// https://docs.expo.dev/guides/using-eslint/
module.exports = {
  extends: ['expo',"plugin:import/typescript"],
  "plugins": ["unused-imports", "prettier"],
  "ignorePatterns": [
    "node_modules",
    "dist",
    "public",
    ".eslintrc.js",
    ".eslintrc.json",
    "babel.config.js",
    "jest.config.js",
    "metro.config.js",
    "react-native.config.js",
    "commitlint.config.js",
    ".prettierrc.js",
    ".next",
    "*.ico",
    "next.config.mjs",
    "android",
    "ios",
    "expo-env.d.ts"
  ],
  "rules": {
    "no-unused-vars": "off",
    "unused-imports/no-unused-imports": "error",
    "unused-imports/no-unused-vars": [
      "warn",
      {
        "vars": "all",
        "varsIgnorePattern": "^_",
        "args": "after-used",
        "argsIgnorePattern": "^_"
      }
    ],
    // "@typescript-eslint/no-explicit-any": "error",
    // "react-hooks/exhaustive-deps": "warn",
    "prettier/prettier": ["error", {"endOfLine": "auto"}],
    "import/no-unresolved": "off",
  },
};
