module.exports = {
  env: { browser: true, node: true },
  root: true,
  extends: [
    'eslint:recommended',
    'plugin:vue/essential',
    'plugin:prettier/recommended'
  ],
  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 2017,
    sourceType: 'module'
  }
}
