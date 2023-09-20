// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {
    enabled: false,
  },
  typescript: {
    shim: false,
  },
  imports: {
    dirs: ['stores'],
  },
  build: {
    transpile: ['trpc-nuxt'],
  },
  modules: [
    [
      '@pinia/nuxt',
      {
        autoImports: ['defineStore', 'acceptHMRUpdate', 'storeToRefs'],
      },
    ],
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
