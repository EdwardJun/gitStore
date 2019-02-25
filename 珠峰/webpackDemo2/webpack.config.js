let path = require('path')
let HtmlWebpackPlugin = require('html-webpack-plugin')
let VueLoaderPlugin  = require('vue-loader/lib/plugin')
console.log('d111111111')
module.exports = {
  mode: 'development',
  entry: {
    home: './src/index.js',
    // other: './src/other.js'
  },
  output: {
    // [name] home, other
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
      filename: 'home.html',
      chunks: ['home']
    }),
    // new HtmlWebpackPlugin({
    //   template: './index.html',
    //   filename: 'other.html',
    //   chunks: ['other']
    // }),
    new VueLoaderPlugin()
  ]
}