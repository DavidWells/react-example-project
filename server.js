/*eslint-disable no-console, no-var */
var express = require('express')
var app = express()
var webpack = require('webpack')
var webpackDevMiddleware = require('webpack-dev-middleware')
var WebpackConfig = require('./webpack.config.js')
var compiler = webpack(WebpackConfig)
var PORT = 8000;

// compile code with webpack
app.use(webpackDevMiddleware(compiler, {
  noInfo: true,
  publicPath: WebpackConfig.output.publicPath,
  stats: {
    colors: true
  }
}))

// Enable hot reloading
app.use(require('webpack-hot-middleware')(compiler))

// Serve index locally
app.get("/", function(req, res) {
  res.sendFile(__dirname + '/index.html')
})

// Start local dev server
app.listen(PORT, function () {
  console.log('Server listening on http://localhost:' + PORT)
})
