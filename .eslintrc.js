/** @type {import('eslint').ESLint.ConfigData} */
module.exports = {
  overrides: [
    {
      extends: ["eslint-config-codely/typescript"],
      files: ["*.ts"],
      parserOptions: {
        tsconfigRootDir: __dirname,
        project: "./tsconfig.json",
      },
      rules: {
        "import/no-unresolved": "off",
        "prettier/prettier": ["error", { printWidth: 100, useTabs: false, endOfLine: "auto" }],
      },
    },
  ],
};
