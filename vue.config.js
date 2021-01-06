const path = require('path')
const TerserPlugin = require('terser-webpack-plugin') //去除console
const CompressionPlugin = require('compression-webpack-plugin') //压缩为gzip文件
const Happypack = require('happypack')
const os = require('os')
const happyThreadPool = Happypack.ThreadPool({ size: os.cpus().length })

module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
  outputDir: 'dist',
  devServer: {
    port: 9981,
    open: true,
    https: false,
    hotOnly: true, //当编译失败时，不刷新页面
    overlay: {
      warnings: false, //用来在编译出错的时候，在浏览器页面上显示错误
      errors: true
    },
    proxy: {
      '/s': {
        target: 'https://www.baidu.com',
        changeOrigin: true, // 允许websockets跨域
        // ws: true,
        pathRewrite: {
          '^/s': '/s'
        }
      }
    },
    watchOptions: {
      // 不监听的文件或文件夹，支持正则匹配
      ignored: /node_modules/,
      // 监听到变化后等1s再去执行动作
      aggregateTimeout: 1000,
      // 默认每秒询问1000次
      poll: 1000
    }
    // lintOnSave: false
  },
  productionSourceMap: false,
  configureWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      // 为生产环境修改配置...
      config.mode = 'production'
      let optimization = {
        minimizer: [
          new TerserPlugin({
            terserOptions: {
              ecma: undefined,
              warnings: false,
              parse: {},
              compress: {
                drop_console: true,
                drop_debugger: false,
                pure_funcs: ['console.log'] // 移除console
              }
            }
          })
        ]
      }
      Object.assign(config, {
        optimization
      })
      //开启gzip压缩
      const productionGzipExtensions = /\.(js|css|json|txt|html|ico|svg)(\?.*)?$/i
      config.plugins = [
        ...config.plugins,
        new CompressionPlugin({
          filename: '[path].gz[query]',
          algorithm: 'gzip',
          test: productionGzipExtensions, //匹配文件名
          threshold: 10240, //对超过10k的数据压缩
          deleteOriginalAssets: false //不删除源文件
        })
      ]
    } else {
      // 为开发环境修改配置...
      config.mode = 'development'
    }

    // 多线程优化构建速度
    config.plugins.push(
      new Happypack({
        loaders: ['babel-loader', 'vue-loader', 'url-loader'],
        //共享进程池
        threadPool: happyThreadPool,
        //允许 HappyPack 输出日志
        verbose: true,
        threads: 3 // 线程数取决于你电脑性能的好坏，好的电脑建议开更多线程
      })
    )
  },
  // 第三方插件配置
  pluginOptions: {},
  // 修改 pages 入口
  pages: {
    index: {
      entry: 'examples/main.js', // 入口
      template: 'public/index.html', // 模板
      filename: 'index.html' // 输出文件
    }
  },
  // 扩展 webpack 配置
  chainWebpack: config => {
    // @ 默认指向 src 目录，这里要改成 examples
    // 另外也可以新增一个 ~ 指向 packages
    config.resolve.alias
      .set('@', path.resolve('examples'))
      .set('~', path.resolve('packages'))
      .set('@com', path.resolve('components'))
      .set('@src', path.resolve('src'))

    // 把 packages 和 examples 加入编译，因为新增的文件默认是不被 webpack 处理的
    config.module
      .rule('js')
      .include.add(/packages/)
      .end()
      .include.add(/examples/)
      .end()
      .use('babel')
      .loader('babel-loader')
      .tap(options => {
        // 修改它的选项...
        return options
      })
  }
}
