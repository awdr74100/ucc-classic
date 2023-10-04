// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {
    enabled: false,
  },
  typescript: {
    shim: false,
  },
  experimental: {
    typedPages: true,
  },
  build: {
    transpile: ['trpc-nuxt'],
  },
  modules: [
    [
      '@nuxtjs/tailwindcss',
      {
        viewer: false,
      },
    ],
    ['nuxt-vitest', {}],
  ],
});
