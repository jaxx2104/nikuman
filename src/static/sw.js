importScripts('/_nuxt/workbox.3de3418b.js')

const workboxSW = new self.WorkboxSW({
  cacheId: 'nikuman',
  clientsClaim: true,
  directoryIndex: '/'
})

workboxSW.precache([
  {
    url: '/_nuxt/app.88b3af6d6fdecd7659cc.js',
    revision: '3d14786f2286b6a3624cd6a6c29079c5'
  },
  {
    url: '/_nuxt/layouts/default.d562a8bd642d6e7c0139.js',
    revision: '56dcb93220772283c2dfc607107b28e2'
  },
  {
    url: '/_nuxt/manifest.b3e6c9a98b86795a4e5b.js',
    revision: '8636daa2423df1152daa829d72858ab7'
  },
  {
    url: '/_nuxt/pages/index.020f5831b40a00abe856.js',
    revision: 'd5dee22cb836564de9ff8ca59227db50'
  },
  {
    url: '/_nuxt/vendor.f55052b9cdc649f37b55.js',
    revision: 'd236ba46f5d7716f3462c590404cee86'
  }
])

workboxSW.router.registerRoute(
  new RegExp('/_nuxt/.*'),
  workboxSW.strategies.cacheFirst({}),
  'GET'
)

workboxSW.router.registerRoute(
  new RegExp('/.*'),
  workboxSW.strategies.networkFirst({}),
  'GET'
)
