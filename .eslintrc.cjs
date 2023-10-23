module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
    "plugin:prettier/recommended",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parser: "@typescript-eslint/parser",
  plugins: ["react-refresh"],
  rules: {
    // "react-refresh/only-export-components": [
    //   "warn",
    //   { allowConstantExport: true },
    // ],
    quotes: ["error", "single", { allowTemplateLiterals: true }],
    semi: ["error", "always"],
    "no-var": "error",
    // "object-curly-spacing": ["error", "never"],
    // Enforce one space after commas for ES modules
    "comma-spacing": ["error", { before: false, after: true }],
    "no-extra-parens": ["error", "all"],
    "no-extra-semi": "error",
    "no-multiple-empty-lines": ["error", { max: 1 }],
    "max-len": [
      "error",
      {
          "code": 300
      }
  ],
  'prettier/prettier': 'off',



  },
};
