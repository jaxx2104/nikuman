const webpack = require('webpack')

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
  return defaultConfig
}
