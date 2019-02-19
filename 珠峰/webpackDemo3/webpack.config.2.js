let path = require('path')
let HtmlWebpackPlugin = require('html-webpack-plugin')
let CleanWebpackPlugin = require('clean-webpack-plugin')
let webpack = require('webpack')
// 模块 happypack 可以实现多线程来打包
let Happypack = require('happypack')

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  devServer: {
    port: 3000,
    contentBase: './dist'
  },
  module: {
    noParse: /jquery/, // 不去解析 jquery 中的依赖库
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        // include: path.resolve('src'),
        use: 'Happypack/loader?id=js'
      },
      {
        test: /\.css$/,
        use: 'Happypack/loader?id=css'
      }
    ]
  },
  plugins: [
    new Happypack({
      id: 'js',
      use: [
        {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react'
            ]
          }
        }
      ]
    }),
    new Happypack({
      id: 'css',
      use: ['style-loader', 'css-loader']
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html'
    }),
    new CleanWebpackPlugin('./dist'),
    new webpack.IgnorePlugin(/\.\/locale/, /moment/)
  ]
}