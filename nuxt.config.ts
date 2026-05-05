import tailwindcss from "@tailwindcss/vite"

export default defineNuxtConfig({
  compatibilityDate: "2025-05-01",
  devtools: { enabled: true },
  modules: ["nuxt-auth-utils"],
  css: ["~/assets/css/main.css"],
  vite: {
    plugins: [tailwindcss()],
  },
  runtimeConfig: {
    session: {
      maxAge: 60 * 60 * 24 * 7,
    },
  },
  nitro: {
    storage: {
      uploads: {
        driver: "fs",
        base: "./public/uploads",
      },
    },
  },
})
