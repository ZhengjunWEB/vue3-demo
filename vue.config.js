module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://api.gate.wqjgj.com/',
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  },
  css: {
    loaderOptions: {
      scss: {
        prependData: `@import "@/assets/css/mixins.scss";`
      }
    }
  },
  lintOnSave: false
}
