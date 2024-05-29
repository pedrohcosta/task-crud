module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
  ],
  plugins: ["@typescript-eslint", "prettier", "unused-imports"],
  rules: {
    "@typescript-eslint/no-explicit-any": "off",
    semi: [2, "always"],
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": "off",
    "unused-imports/no-unused-imports": "error",
    "@typescript-eslint/ban-ts-comment": "off",
    camelcase: [
      "error",
      { properties: "never", allow: ["^request_", "^response_", "__mocks__"] },
    ],
    "unused-imports/no-unused-vars": [
      "warn",
      {
        vars: "all",
        varsIgnorePattern: "^_",
        args: "after-used",
        argsIgnorePattern: "^_",
      },
    ],
  },
};
