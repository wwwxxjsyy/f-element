const path = require("path");
//去除console
const TerserPlugin = require('terser-webpack-plugin')
//开启gzip压缩
const CompressionWebpackPlugin = require('compression-webpack-plugin')
// 匹配此 {RegExp} 的资源
const productionGzipExtensions = /\.(js|css|json|ttf)(\?.*)?$/i

module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "./" : "/",
  outputDir: "dist",
  devServer: {
    port: 9981,
    open: true,
    overlay: {
      warnings: false,
      errors: true
    },
    proxy: {
      "/s": {
        target: "https://www.baidu.com"
      }
    }
    // lintOnSave: false
  },
  productionSourceMap: false,
  configureWebpack: {
    // plugins: [
    //   new CompressionWebpackPlugin({
    //     filename: '[path][name].gz[query]',
    //     algorithm: 'gzip',
    //     test: productionGzipExtensions,
    //     threshold: 0,
    //     minRatio: 0.8,
    //   }),
    //   new Webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    // ],
    optimization: {
      minimizer: [
        new TerserPlugin({
          terserOptions: {
            ecma: undefined,
            warnings: false,
            parse: {},
            compress: {
              drop_console: true,
              drop_debugger: false,
              pure_funcs: ['console.log'], // 移除console
            },
          },
        }),
      ],
    },
  },
  // 修改 pages 入口
  pages: {
    index: {
      entry: "examples/main.js", // 入口
      template: "public/index.html", // 模板
      filename: "index.html" // 输出文件
    }
  },
  // 扩展 webpack 配置
  chainWebpack: config => {
    // @ 默认指向 src 目录，这里要改成 examples
    // 另外也可以新增一个 ~ 指向 packages
    config.resolve.alias
      .set("@", path.resolve("examples"))
      .set("~", path.resolve("packages"))
      .set("@com", path.resolve("components"))
      .set("@src", path.resolve("src"));

    // 把 packages 和 examples 加入编译，因为新增的文件默认是不被 webpack 处理的
    config.module
      .rule("js")
      .include.add(/packages/)
      .end()
      .include.add(/examples/)
      .end()
      .use("babel")
      .loader("babel-loader")
      .tap(options => {
        // 修改它的选项...
        return options;
      });
  }
};
