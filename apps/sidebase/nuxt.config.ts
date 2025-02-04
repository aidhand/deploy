// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  telemetry: false,

  nitro: {
    preset: "bun",
  },

  build: {
    transpile: ["trpc-nuxt"],
  },

  css: ["~/assets/css/globals.css"],

  modules: [
    "@nuxt/ui",
    "@nuxt/fonts",
    "@nuxtjs/fontaine",
    "@sidebase/nuxt-auth",
    "@vueuse/nuxt",
  ],
});
