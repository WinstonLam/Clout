module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: 'standard',
  overrides : [
    {
       "files": "**/*.ts",
       "env": {
        "es2020": true
      }
    }
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  rules: {
    "strict": "off",
    "getter-return": "off",
    "no-empty-function": "off"
  }
}
