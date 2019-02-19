let path = require('path')
let HtmlWebpackPlugin = require('html-webpack-plugin')
let CleanWebpackPlugin = require('clean-webpack-plugin')
let webpack = require('webpack')
// 模块 happypack 可以实现多线程来打包
// let Happypack = require('happypack')

module.exports = {
  mode: 'production', // development  production
  entry: {
    index: './src/index.js'
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  devServer: {
    hot: true, // 启用热更新
    port: 3000,
    contentBase: './dist'
  },
  optimization: {
    //分隔代码块
    splitChunks: {
      cacheGroups: { // 缓存组
        common: { // 公共的模块，多页面应用才需要抽离次模块
          chunks: 'initial', // 从入口开始抽取
          minSize: 0,
          minChunks: 2
        },
        vendor: {
          priority: 1,
          test: /node_modules/,
          chunks: 'initial', // 从入口开始抽取
          minSize: 0,
          minChunks: 2
        }
      }
    }
  },
  module: {
    noParse: /jquery/, // 不去解析 jquery 中的依赖库
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        // include: path.resolve('src'),
        // use: 'Happypack/loader?id=js'
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react'
            ],
            plugins: [
              '@babel/plugin-syntax-dynamic-import'
            ]
          }
        }
      },
      {
        test: /\.css$/,
        // use: 'Happypack/loader?id=css'
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [
    // new Happypack({
    //   id: 'js',
    //   use: [
    //     {
    //       loader: 'babel-loader',
    //       options: {
    //         presets: [
    //           '@babel/preset-env',
    //           '@babel/preset-react'
    //         ]
    //       }
    //     }
    //   ]
    // }),
    // new Happypack({
    //   id: 'css',
    //   use: ['style-loader', 'css-loader']
    // }),
    new HtmlWebpackPlugin({
      template: './public/index.html'
    }),
    new CleanWebpackPlugin('./dist'),
    new webpack.IgnorePlugin(/\.\/locale/, /moment/),
    new webpack.NamedModulesPlugin(), // 打印更新模块的路径
    new webpack.HotModuleReplacementPlugin() // 热更新插件
  ]
}