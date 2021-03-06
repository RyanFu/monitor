const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'monitor.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
      inject: 'head',
      minify: { // 关闭 js 压缩
        minifyJS: false
      }
    })
  ],
  devServer: {
    // webpack-dev-server 用于直接通过端口访问打包资源，它会将资源打包进内存中，同时支持热更新，监听文件变化再借由 websocket 通知浏览器更新。
    // 访问端口时，可以去内存去取，也可以去 contentBase 去取
    port: 9000,
    compress: false,
    // contentBase: path.resolve(__dirname, 'dist'),
    before: function (app) {
      app.get('/demo', function (req, res) {
        setTimeout(() => {
          res.status(500).send('some error happen')
          // res.json({data: 'myDemoData'})
        }, 5000)
      })

      app.post('/demo', function (req, res) {
        setTimeout(() => {
          res.status(500).send('some error happen')
          // res.json({data: 'myDemoData'})
        }, 0)
      })

      app.put('/demo', function (req, res) {
        setTimeout(() => {
          res.status(500).send('some error happen')
          // res.json({data: 'myDemoData'})
        }, 0)
      })
    }
  }
}
