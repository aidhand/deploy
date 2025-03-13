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

    "p-light": "p-2",
    "p-medium": "p-4",
    "p-heavy": "p-8",
    "m-light": "m-2",
    "m-medium": "m-4",
    "m-heavy": "m-8",
    "b-light": "border-zinc-500/20",
    "b-medium": "border-zinc-500/30",
    "b-heavy": "border-zinc-500/40",
    "bg-light": "bg-zinc-400/4",
    "bg-medium": "bg-zinc-400/8",
    "bg-heavy": "bg-zinc-400/12",

    btn: "px-4 py-2 rounded hover:bg-opacity-90 active:bg-opacity-80",
    "btn-primary": "light:bg-blue-500 dark:bg-blue-600 text-white font-medium",
    "btn-secondary": "light:bg-zinc-200 dark:bg-zinc-800",

    input: "p-2 border b-medium rounded light:bg-white dark:bg-black",
  },
  // TODO: make the dialog styles part of the theme
});
