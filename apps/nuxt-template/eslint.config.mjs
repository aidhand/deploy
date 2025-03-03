import eslintConfigPrettier from "eslint-config-prettier";
import withNuxt from "./.nuxt/eslint.config.mjs";

export default withNuxt([
  { ignores: ["drizzle/migrations/**"] },
  eslintConfigPrettier,
]);
