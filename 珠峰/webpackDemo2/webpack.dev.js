let { smart } = require('webpack-merge')
let base = require('./webpack.config.js')
let webpack = require('webpack')

module.exports = smart(base, {
  mode: 'development', // production  development
  plugins: [
    new webpack.DefinePlugin({
      'NODE_ENV': JSON.stringify('development')
    })
  ],
  devServer: {
    proxy: {
      // '/api': 'http://localhost:3000' // 配置了一个代理
      '/api': {
        target: 'http://localhost:3000',
        pathRewrite: {
          '/api': ''
        }
      }
    }
  }
})