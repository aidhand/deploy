import antfu from "@antfu/eslint-config";

const ignores = [
  ".nuxt",
  ".output",
  "node_modules",
  "public",
  "**/.nuxt/**",
  "**/.output/**",
  "**/node_modules/**",
  "**/public/**",
];

export default antfu({
  // .eslintignore is no longer supported in Flat config, use ignores instead
  ignores,
  gitignore: true,

  // Stylistic formatting rules
  stylistic: false,

  markdown: true,
  javascript: true,
  typescript: true,
  vue: true,
  jsonc: true,
  yaml: true,
  toml: true,

  // Overwrite certain rules to your preference
  rules: {
    "vue/html-indent": "off",
    "vue/html-closing-bracket-newline": "off",
    "vue/singleline-html-element-content-newline": "off",
    "node/prefer-global/process": ["error", "always"],
  },
});
