// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {
    enabled: false,
  },
  typescript: {
    shim: false,
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
    [
      'nuxt-typed-router',
      {
        strict: {
          NuxtLink: {
            strictToArgument: true,
          },
          router: {
            strictToArgument: true,
          },
        },
      },
    ],
  ],
});
