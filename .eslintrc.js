module.exports = {
  env: {
    es6: true,
    node: true
  },
  parser: "babel-eslint",
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module"
  },
  extends: [
    "eslint:recommended",
    "plugin:prettier/recommended",
    "plugin:jest/recommended"
  ],
  overrides: [
    {
      files: ["*.+(test|spec).js"],
      rules: {
        "no-unused-expressions": "off"
      }
    },
    {
      files: ["src/server.js"],
      rules: {
        "no-console": "off"
      }
    }
  ]
};
