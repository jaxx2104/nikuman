const path = require('path')
const webpack = require('webpack')
require('dotenv').config()

module.exports = (baseConfig, env, defaultConfig) => {
  defaultConfig.plugins.push(
    new webpack.EnvironmentPlugin([
      'APIKEY',
      'AUTHDOMAIN',
      'DATABASEURL',
      'PROJECTID',
      'STORAGEBUCKET',
      'MESSAGINGSENDERID'
    ])
  )
  defaultConfig.resolve.alias['~src'] = path.resolve(__dirname, '../src')
  return defaultConfig
}
