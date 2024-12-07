// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  telemetry: false,

  css: ["@unocss/reset/tailwind.css", "~/assets/css/globals.css"],

  nitro: {
    preset: "bun",
  },

  modules: ["@nuxt/eslint", "@nuxt/fonts", "@unocss/nuxt"],
});
