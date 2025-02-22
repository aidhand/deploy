import { defineConfig, presetUno, transformerDirectives } from "unocss";

export default defineConfig({
  presets: [
    presetUno({
      dark: "media",
    }),
  ],

  transformers: [transformerDirectives()],

  theme: {
    fontFamily: {
      sans: "Inter",
    },
  },
});
