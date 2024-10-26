// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  telemetry: false,

  css: ["@unocss/reset/tailwind.css", "~/assets/css/globals.css"],

  eslint: {
    // options here
  },

  nitro: {
    preset: "bun",
  },

  modules: ["@pinia/nuxt", "@vueuse/nuxt", "@nuxt/eslint", "@unocss/nuxt", "@nuxt/fonts"],
});
