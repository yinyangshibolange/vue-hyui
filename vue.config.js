const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  pages: {
    index: {
      entry: 'examples/main.js',
      template: 'public/index.html',
      filename: 'index.html'
    }
  },
  // 扩展webpack配置，使packages加入编译
  chainWebpack: config => {
    config.module
      .rule('js')
      .include
      .add('/package')
      .end()
      .use('babel')
      .loader('babel-loader')
      .tap(options => options);
  }

})
