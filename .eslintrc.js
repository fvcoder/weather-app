/** @type {import('eslint').ESLint.ConfigData} */
module.exports = {
  extends: ["eslint-config-codely/typescript"],
  overrides: [
    {
      files: ["src/*.ts"],
      parserOptions: {
        tsconfigRootDir: __dirname,
        project: ["./tsconfig.app.json"],
      },
    },
    {
      files: ["server/*.ts"],
      parserOptions: {
        tsconfigRootDir: __dirname,
        project: ["./tsconfig.server.json"],
      },
    },
  ],
  rules: {
    "prettier/prettier": ["error", { printWidth: 100, useTabs: false, endOfLine: "auto" }],
    "import/no-unresolved": "off",
  },
};
