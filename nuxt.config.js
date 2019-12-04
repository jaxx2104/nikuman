export default {
  mode: 'spa',

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
      },
      {
        property: 'og:description',
        content: process.env.npm_package_description || ''
      },
      {
        property: 'og:image',
        content:
          'https://user-images.githubusercontent.com/2681007/34653636-2bd735c6-f432-11e7-9b77-8ec76fa46286.jpeg'
      },
      { property: 'twitter:card', content: 'summary' },
      { property: 'twitter:site', content: '@jaxx2104' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/apple-touch-icon.png'
      },
      { rel: 'dns-prefetch', href: 'https://nikuman.jaxx2104.info' }
    ],
    script: [
      {
        src:
          'https://cdn.jsdelivr.net/npm/first-input-delay@0.1.3/src/first-input-delay.min.js',
        crossorigin: 'anonymous'
      },
      {
        src: 'https://cdn.jsdelivr.net/npm/pwacompat@2.0.6/pwacompat.min.js',
        integrity:
          'sha384-GOaSLecPIMCJksN83HLuYf9FToOiQ2Df0+0ntv7ey8zjUHESXhthwvq9hXAZTifA',
        crossorigin: 'anonymous'
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: 'rebeccapurple' },
  loadingIndicator: {
    name: 'circle',
    color: 'rebeccapurple',
    background: 'white'
  },
  manifest: {
    name: process.env.npm_package_name || '',
    lang: 'ja',
    theme_color: 'rebeccapurple',
    icons: [
      {
        src: '/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png'
      },
      {
        src: '/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png'
      }
    ]
  },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/dotenv-module
    ['@nuxtjs/dotenv', { path: './' }]
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios'
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   */
  build: {
    /*
     ** Run ESLint on save
     */
    extend(config, { isDev, isClient }) {
      // config.devtool = 'eval-source-map'
    }
  },
  srcDir: 'src'
}
