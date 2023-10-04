// prettier.config.js, .prettierrc.js, prettier.config.mjs, or .prettierrc.mjs

/** @type {import("prettier").Config} */

const config = {
  trailingComma: "none",
  tabWidth: 4,
  semi: true,
  singleQuote: true,
  printWidth: 80,
  bracketSpacing: true,
};
module.exports = {
  config,
  plugins: ["prettier-plugin-astro"],
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
  ],
};
