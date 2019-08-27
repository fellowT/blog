module.exports = {
  "extends": [
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended"
  ],
  "parser": "@typescript-eslint/parser",
  "plugins": ["@typescript-eslint","react"],
  "env": {
    "browser": true,
    "node": true,
  },
  "rules": {
    "@typescript-eslint/rule-name": "off",
    "indent": "off",
    "@typescript-eslint/indent": ["error", 2],
    "@typescript-eslint/no-require-imports":"off",
    "@typescript-eslint/no-var-requires":"off",
    "@typescript-eslint/no-use-before-define":"off",
    "@typescript-eslint/no-explicit-any":"off",
    "no-undef":"off",
    "@typescript-eslint/explicit-function-return-type":"off"
  },
}