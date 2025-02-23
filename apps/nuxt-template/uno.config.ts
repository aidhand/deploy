import {
  defineConfig,
  presetAttributify,
  presetTypography,
  presetUno,
  transformerDirectives,
} from "unocss";

export default defineConfig({
  theme: { fontFamily: { sans: "Inter" } },

  presets: [
    presetAttributify(),
    presetTypography(),
    presetUno({ dark: "media" }),
  ],
  transformers: [transformerDirectives()],
});
