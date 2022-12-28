module.exports = {
  env: {
    commonjs: true,
    es2021: true,
    node: true
  },
  extends: "standard",
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest"
  },
  rules: {
    indent: ["error", 2],
    "linebreak-style": 0,

    quotes: ["error", "double"],
    semi: ["error", "always"]
  }
};
