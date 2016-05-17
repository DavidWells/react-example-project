/**
 * Webpack Production config
 */
var webpack = require('webpack')
var path = require('path')
var ExtractTextPlugin = require('extract-text-webpack-plugin')

const GLOBALS = {
  'process.env.NODE_ENV': JSON.stringify('production'),
  __DEV__: false,
}

const PATHS = {
  app: path.join(__dirname, 'app'),
  build: path.join(__dirname, 'dist'),
}

module.exports = {
  debug: true,

  devtool: 'source-map',
  // set to false to see a list of every file being bundled.
  noInfo: true,
  // set the entry point to your apps source
  entry: [
    PATHS.app,
  ],
  // webpack can build to different targets. Web is default
  target: 'web',
  // Where do you want to output your app?
  output: {
    path: PATHS.build,
    publicPath: '/',
    filename: 'bundle.js',
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin(GLOBALS), // Tells React to build in prod mode. https://facebook.github.io/react/downloads.html
    new ExtractTextPlugin("styles.css"),
    // dedupe common code
    new webpack.optimize.DedupePlugin(),
    // minify code
    new webpack.optimize.UglifyJsPlugin(),
  ],
  module: {
    loaders: [
      /* JS Loaders */
      {
        test: /(\.js|\.jsx)$/,
        include: path.join(__dirname, 'app'),
        loaders: ['babel'],
      },
      /* Production CSS Loaders */
      {
        test: /\.css/, loader: ExtractTextPlugin.extract(
          'style-loader',
          'css-loader?localIdentName=[name]__[local]___[hash:base64:5]&camelCase!postcss-loader')
      },
      /* Image Loader */
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: ['file'],
      },
    ],
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  postcss: [
    /* autoprefix for different browser vendors */
    require('autoprefixer'),
    /* enable css @imports like Sass/Less */
    require('postcss-import'),
    /* enable mixins like Sass/Less */
    require('postcss-mixins'),
    /* enable nested css selectors like Sass/Less */
    require('postcss-nested'),
    /* require global variables */
    require('postcss-simple-vars'),
  ],
}
