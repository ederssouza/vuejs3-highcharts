'use strict'

const { join } = require('path')

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        components: join(__dirname, 'src', 'components'),
        views: join(__dirname, 'src', 'views'),
        utils: join(__dirname, 'src', 'utils'),
        mixins: join(__dirname, 'src', 'mixins')
      }
    }
  }
}
