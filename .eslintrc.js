module.exports = {
  "env": {
    "es6": true,
    "node": true,
    "browser": true,
  },
  "extends": "eslint:recommended",
  "extends": "airbnb",
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": 2018,
    "sourceType": "module"
  },
  "plugins": [
    "react"
  ],
  "rules": {
    "indent": [
      "error",
      2,
      { "SwitchCase": 1 }
    ],
    "linebreak-style": [
      "error",
      "unix"
    ],
    "quotes": [
      "error",
      "single"
    ],
    "semi": [
      "error",
      "never"
    ],
    "react/prop-types": 0,
    "camelcase": 0,
    "jsx-a11y/label-has-for": 0,
  }
};
