// only add `router.base = '/<repository-name>/'` if `DEPLOY_ENV` is `GH_PAGES`
const routerBase =
  process.env.DEPLOY_ENV === 'GH_PAGES'
    ? {
        router: {
          base: '/portfolio-nuxt/'
        }
      }
    : {}

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
          'https://fonts.googleapis.com/css?family=Work+Sans:500|Material+Icons'
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
    sass: ['~assets/scss/style.scss'] // alternative: scss
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
}
