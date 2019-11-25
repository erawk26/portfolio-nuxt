import colors from 'vuetify/lib/util/colors'
export default {
  router: {
    base: '/portfolio-nuxt/'
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
      },
      {
        rel: 'stylesheet',
        href:
          'https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css'
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
    [
      '@nuxtjs/vuetify',
      {
        theme: {
          themes: {
            light: {
              primary: colors.red.darken1, // #E53935
              secondary: colors.red.lighten4, // #FFCDD2
              cream: '#f1e0c5',
              tan: '#c9b79c',
              dkGreen: '#3b8070',
              charcoal: '#342a21',
              dkRed: '#720015'
            },
            dark: {
              primary: colors.blue.lighten3
            }
          }
        },
        defaultAssets: {
          font: {
            family: 'Libre Baskerville'
          },
          icons: 'mdi'
        }
      }
    ],
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
    customVariables: ['~/assets/scss/_vuetify.scss']
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
