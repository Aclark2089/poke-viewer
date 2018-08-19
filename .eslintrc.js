module.exports = {
  env: {
    es6: true,
    node: true
  },
  "parser": "babel-eslint",
  "parserOptions": {
    "ecmaVersion": 6,
    "sourceType": "module",
},
  extends: "eslint:recommended",
  "overrides": [
    {
      "files": ["*.+(test|spec).js"],
      env: {
        es6: true,
        node: true,
        jest: true
      },  
      "rules": {
        "no-unused-expressions": "off"
      }
    },
    {
      "files": ["src/server.js"],
      "rules": {
        "no-console": "off"
      }
    }
  ]
};
