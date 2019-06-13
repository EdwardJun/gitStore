const path = require('path')

console.log(process.env.NODE_ENV)
console.log(process.env.VUE_APP_BASE_URL)
const isBuild = process.env.NODE_ENV === 'production'

function resolve (dir) {
  return path.join(__dirname, './', dir)
}

module.exports = {
  //部署应用包时的基本 URL
  publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
  //当运行 vue-cli-service build 时生成的生产环境构建文件的目录
  outputDir: 'dist',
  //放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录
  // assetsDir: 'assets',
  // eslint-loader 是否在保存的时候检查 安装@vue/cli-plugin-eslint有效
  // lintOnSave: true,
  //是否使用包含运行时编译器的 Vue 构建版本。设置true后你就可以在使用template
  // runtimeCompiler: true,
  // 生产环境是否生成 sourceMap 文件 sourceMap的详解请看末尾  
  productionSourceMap: !isBuild,

  chainWebpack: config => {
    // 为src下文件配别名
    config.resolve.alias
      .set('@', resolve('src'))
  },

  // css相关配置
  css: {
    // 是否使用css分离插件 ExtractTextPlugin 生产环境下是true,开发环境下是false
    extract: false,
    // 开启 CSS source maps?
    sourceMap: true,
    // css预设器配置项
    loaderOptions: {
      css: {
        localIdentName: '[name]-[hash]',
        camelCase: 'only'
      }
    },
    // 启用 CSS modules for all css / pre-processor files.
    modules: false
  },

  // webpack-dev-server 相关配置
  devServer: { // 设置代理
    hot: true, //热加载
    host: '0.0.0.0', //ip地址
    port: 3000, //端口
    https: false, //false关闭https，true为开启
    open: false, //自动打开浏览器
    proxy: {
      '/api': { //本地                                        
        target: 'https://www.jianshu.com',
        // 如果要代理 websockets
        ws: false,
        changeOrigin: true,
        pathRewrite: {
          "^/api": "/"
        }
      }
    }
  }
}