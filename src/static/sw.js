importScripts('/_nuxt/workbox.3de3418b.js')

const workboxSW = new self.WorkboxSW({
  cacheId: 'nikuman',
  clientsClaim: true,
  directoryIndex: '/'
})

workboxSW.precache([
  {
    url: '/_nuxt/app.84adc59429c8439857cf.js',
    revision: 'dc4cffcba81d180d64ff0ca9fda2847b'
  },
  {
    url: '/_nuxt/layouts/default.d562a8bd642d6e7c0139.js',
    revision: '56dcb93220772283c2dfc607107b28e2'
  },
  {
    url: '/_nuxt/manifest.8b777783e24c18117a02.js',
    revision: 'e1ce14b6fbffa465723c79e3b4f465e8'
  },
  {
    url: '/_nuxt/pages/index.329159f4046543cc200b.js',
    revision: 'c88866640f39292b7f6683a735fdb62b'
  },
  {
    url: '/_nuxt/vendor.1e49bdc3c18f5cd394a1.js',
    revision: 'cc781ab66d1e736e1d3a575eaf9022e4'
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
