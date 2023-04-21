/*
 * @Author: 黄施能 m18268323892@163.com
 * @Date: 2023-4-20 11:44:04
 * @LastEditors: 黄施能 m18268323892@163.com
 * @LastEditTime: 2023-4-20 18:23:20
 * @FilePath: /weldInspection/vue.config.js
 * @Description:
 */
module.exports = {
  chainWebpack: (config) => {
    config.plugin('html').tap((args) => {
      args[0].title = '焊缝管理系统'
      return args
    })
  },
  //在项目配置的时候，默认 npm 包导出的是运行时构建，即 runtime 版本，不支持编译 template 模板
  runtimeCompiler: true,
  //默认输出文件夹为
  outputDir: './weldInspection',
  //将css，js和img静态资源文件夹放在同一个文件夹中
  assetsDir: 'assets',
  //打包后静态资源加前缀,index.html中引用资源的前缀
  publicPath: './',
  configureWebpack: (config) => {
    if (process.env.NODE_ENV === 'production') {
      config.optimization.minimizer[0].options.terserOptions.compress.drop_console = true // 移除控制台打印
    }
  },
  devServer: {
    // open: true, // 自动打开浏览器
    // host: '0.0.0.0',
    proxy: {
      // 开发环境下，走代理发送请求
      '/api-proxy/': {
        // 此处和 VUE_APP_API_BASE_URL 匹配
        target: 'https://dev.geemro.com/oneid-php/public/index.php/', // 此处是开发环境接口地址
        changeOrigin: true,
        pathRewrite: {
          '^/api-proxy/': '',
        },
      },
      '/api-manage/': {
        // 此处和 VUE_APP_API_BASE_URL 匹配
        target: 'https://dev.geemro.com/manage-php/public/index.php/',
        changeOrigin: true,
        pathRewrite: {
          '^/api-manage/': '',
        },
      },
      '/api-pms/': {
        // 此处和 VUE_APP_API_BASE_URL 匹配
        target: 'https://dev.geemro.com/pms-php/public/index.php/',
        changeOrigin: true,
        pathRewrite: {
          '^/api-pms/': '',
        },
      },
    },
  },
}
