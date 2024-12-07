import eslintConfigPrettier from "eslint-config-prettier";
import withNuxt from "./.nuxt/eslint.config.mjs";

export default withNuxt(
  [
    // your custom flat configs go here, for example:
    // {
    //   rules: {},
    // },
  ],
  eslintConfigPrettier,
);
