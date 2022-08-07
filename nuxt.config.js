import { defineNuxtConfig } from '@nuxt/kit'

export default defineNuxtConfig({
  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  target: 'static',

  // Modules: https://go.nuxtjs.dev/config-modules
  buildModules: [
    // 'nuxt-vite',
    '@nuxt/nitro/compat',
    '@nuxt/image'
  ]
})
