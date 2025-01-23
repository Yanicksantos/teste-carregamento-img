// import this after install `@mdi/font` package
import 'vuetify/styles'
import { createVuetify } from 'vuetify'

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    icons: {
        defaultSet: 'mdi',
    },
  })
  app.vueApp.use(vuetify)
})
