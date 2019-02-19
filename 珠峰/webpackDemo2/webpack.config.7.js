let path = require('path')
let HtmlWebpackPlugin = require('html-webpack-plugin')
let CleanWebpackPlugin = require('clean-webpack-plugin')
let CopyWebpackPlugin = require('copy-webpack-plugin')
let webpack = require('webpack')

module.exports = {
  mode: 'production', // production  development
  entry: {
    home: './src/index.js'
  },
  output: {
    // [name] home, other
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },
  // 增加映射文件，可以帮我们调试源代码
  // 会单独生成一个 source-map 文件，会标识报错的列和行  文件大和全
  devtool: 'source-map',
  // devtool: 'eval-source-map',
  // devtool: 'cheap-module-source-map',
  // devtool: 'cheap-module-eval-source-map',

  // 实时打包编译
  // watch: true,
  // watchOptions: {
  //   poll: 1000, // 每秒处理 1000次
  //   aggregateTimeout: 500, // 防抖
  //   ignored: /node_modules/
  // },
  devServer: {
    // 用于模拟接口数据
    /* before (app) { // 提供的钩子
      app.get('/user', (req, res) => {
        res.json({
          name: '珠峰---before'
        })
      })
    } */

    // 跨域访问
    /* proxy: {
      // '/api': 'http://localhost:3000' // 配置了一个代理
      '/api': {
        target: 'http://localhost:3000',
        pathRewrite: {
          '/api': ''
        }
      }
    } */
  },
  resolve: {
    modules: [path.resolve('node_modules')],
    alias: {
      bootstrap: 'bootstrap/dist/css/bootstrap.css',
      '@': path.resolve(__dirname, 'src')
    },
    extensions: ['.js', '.css', '.json', '.vue']
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
      filename: 'index.html'
    }),
    new CleanWebpackPlugin('./dist'),
    new CopyWebpackPlugin([
      {
        from: './doc',
        to: './doc'
      }
    ]),
    new webpack.BannerPlugin('make 2019 by wdj'),
    new webpack.DefinePlugin({
      DEV: JSON.stringify('dev')
    })
  ]
}