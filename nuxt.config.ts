// https://nuxt.com/docs/api/configuration/nuxt-config

import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },
  app: {
    head: {
      link: [
        {
          rel: 'stylesheet',
          href: 'https://cdn.jsdelivr.net/npm/@mdi/font/css/materialdesignicons.min.css',
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap',
        },
      ],
    },
  },
  
  build: {
    transpile: ['vuetify'],
  },
  modules: [
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }))
      })
    },
     '@nuxtjs/i18n',
  ],

  i18n: {
    locales: [
      { code: 'pt', iso: 'pt-BR', name: 'Português', isCatchallLocale: true },
      { code: 'en', iso: 'en-US', name: 'English' },
      { code: 'es', iso: 'es-ES', name: 'Español' },
    ],
    
    detectBrowserLanguage: {
      useCookie: true, 
      cookieKey: 'i18n_redirected', 
      alwaysRedirect: true, 
      fallbackLocale: 'pt',
    },
    defaultLocale: 'pt',
    vueI18n: './i18n.config.ts',
  },

  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  }
})
