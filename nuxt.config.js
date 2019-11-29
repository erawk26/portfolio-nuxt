// import colors from 'vuetify/lib/util/colors'
export default {
  router: {
    // base: '/portfolio-nuxt/'
  },
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href:
          'https://cdnjs.cloudflare.com/ajax/libs/hamburgers/1.1.3/hamburgers.min.css'
      },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Libre+Baskerville|Yanone+Kaffeesatz|Material+Icons'
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#206634' },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js modules
   */
  modules: [
    '@nuxtjs/vuetify',
    'nuxt-validate',
    '@nuxtjs/eslint-module',
    '@nuxtjs/google-analytics',
    '@nuxtjs/style-resources'
  ],
  googleAnalytics: {
    id: 'UA-115116018-1'
  },
  styleResources: {
    // your settings here
    scss: ['~/assets/scss/_init.scss'] // alternative: scss
  },
  vuetify: {
    customVariables: ['~/assets/scss/_vuetify.scss'],
    optionsPath: './vuetify.config.js'
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    // extend(config, ctx) {}
  }
}
