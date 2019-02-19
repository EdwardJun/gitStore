let { smart } = require('webpack-merge')
let base = require('./webpack.config.js')
let CleanWebpackPlugin = require('clean-webpack-plugin')
let CopyWebpackPlugin = require('copy-webpack-plugin')
let webpack = require('webpack')

module.exports = smart(base, {
  mode: 'production', // production  development
  plugins: [
    new CleanWebpackPlugin('./dist'),
    new CopyWebpackPlugin([
      {
        from: './doc',
        to: './doc'
      }
    ]),
    new webpack.BannerPlugin('make 2019 by wdj'),
    new webpack.DefinePlugin({
      'NODE_ENV': JSON.stringify('production')
    })
  ]
})