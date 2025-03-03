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

  shortcuts: {
    "flex-center": "items-center justify-center",
    "bg-dialog": "bg-zinc-400/10",
    "bg-input": "bg-white dark:bg-black",
    "b-dialog": "border border-zinc-500/30 rounded-md",
    "b-input": "border border-zinc-400/20 rounded",
    "b-button": "rounded",
    "p-button": "py-2 px-3",
    "p-input": "p-2",
  },
  // TODO: make the dialog styles part of the theme
});
