// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  telemetry: false,

  nitro: { preset: "bun" },

  extends: ["@repo/ui"],
  modules: [
    "@nuxt/icon",
    "@nuxt/image",
    "@nuxt/eslint",
    "@nuxt/fonts",
    "@prisma/nuxt",
    "@unocss/nuxt",
    "nuxt-auth-utils",
  ],

  css: ["@unocss/reset/tailwind.css", "~/assets/css/globals.css"],

  prisma: {
    runMigration: false,
    skipPrompts: true,
  },
});
