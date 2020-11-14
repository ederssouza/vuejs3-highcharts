'use strict'

const { join } = require('path')

module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/vuejs3-highcharts/'
    : '/',
  configureWebpack: {
    resolve: {
      alias: {
        views: join(__dirname, 'src', 'views'),
        components: join(__dirname, 'src', 'components'),
        utils: join(__dirname, 'src', 'utils')
      }
    }
  }
}
