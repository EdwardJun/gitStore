let path = require('path')
let HtmlWebpackPlugin = require('html-webpack-plugin')
let MiniCssExtractPlugin = require('mini-css-extract-plugin')
let optimizeCss = require('optimize-css-assets-webpack-plugin')
let UglifyJsPlugin = require('uglifyjs-webpack-plugin')
let webpack = require('webpack')

module.exports = {
  devServer: { // 开发服务器配置
    host: '0.0.0.0',
    port: 3000,
    progress: true,
    contentBase: './dist',
    compress: true
  },
  mode: 'production', // production  development
  entry: './src/index.js',
  output: {
    filename: 'bundle.[hash:8].js',
    path: path.resolve(__dirname, 'dist')// 路径必须是一个绝对路径
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: true
      }),
      new optimizeCss()
    ]
  },
  plugins: [ // 数组 放着所有的 webpack 插件
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
      minify: {
        removeAttributeQuotes: true,
        collapseWhitespace: true
      },
      hash: true
    }),
    new MiniCssExtractPlugin({
      filename: '/css/main.css'
    }),
    new webpack.ProvidePlugin({
      $: 'jquery'
    })
  ],
  externals: {
    jquery: "$"
  },
  module: { // 模块
    rules: [ // 规则
      // {
      //   test: require.resolve('jquery'),
      //   use: 'expose-loader?$'
      // },
      // css-loader 是解析 @import 这种语法的
      // style-loader 是把 css 插入到 head 标签中
      {
        test: /\.html$/,
        use: 'html-withimg-loader'
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 1,
            outputPath: '/img/',
            // publicPath: 'http://www.123.cn'
          }
        }
      },
      {
        test: /\.css$/,
        use: [
          /* {
            loader: 'style-loader',
            options: {
              insertAt: 'top'
            }
          }, */
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
        ]
      },
      {
        test: /\.less$/,
        use: [
          /* {
            loader: 'style-loader',
            options: {
              insertAt: 'top'
            }
          }, */
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'less-loader'
        ]
      },
      {
        test: /\.js$/,
        use: {
          loader: 'eslint-loader',
          options: {
            enforce: 'pre'
          }
        }
      },
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: { // 用 babel-loader 需要把 es6 -> es5
            presets: [
              '@babel/preset-env'
            ],
            plugins: [
              // '@babel/plugin-proposal-class-properties'
              ["@babel/plugin-proposal-decorators", { "legacy": true }],
              ["@babel/plugin-proposal-class-properties", { "loose" : true }],
              "@babel/plugin-transform-runtime"
            ]
          }
        },
        include: path.resolve(__dirname, 'src'),
        exclude: /node_modules/
      }
    ]
  }
}