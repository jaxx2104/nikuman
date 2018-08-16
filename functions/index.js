const express = require('express')
const functions = require('firebase-functions')
const { Nuxt } = require('nuxt')

const app = express()
const nuxt = new Nuxt({ buildDir: 'ssr', dev: false })

const handleRequest = (req, res) => {
  res.set('Cache-Control', 'public, max-age=600, s-maxage=1200')
  return new Promise((resolve, reject) => {
    nuxt.render(req, res, promise => {
      promise.then(resolve).catch(reject)
    })
  })
}

app.use(handleRequest)
exports.ssr = functions.https.onRequest(app)
