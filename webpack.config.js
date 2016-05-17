var webpack = require('webpack')
var path = require('path')

const GLOBALS = {
  'process.env.NODE_ENV': JSON.stringify('development'),
  __DEV__: true,
}

const PATHS = {
  app: path.join(__dirname, 'app'),
  build: path.join(__dirname, 'dist'),
}

module.exports = {
  debug: true,
  // https://webpack.github.io/docs/configuration.html#devtool
  // https://webpack.github.io/docs/build-performance.html#sourcemaps
  devtool: 'cheap-module-eval-source-map',
  // set to false to see a list of every file being bundled.
  noInfo: true,
  // set the entry point to your apps source
  entry: [
    'webpack-hot-middleware/client?reload=true',
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
    new webpack.DefinePlugin(GLOBALS), // Tells React to build in prod mode. https://facebook.github.io/react/downloads.html
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
  ],
  module: {
    loaders: [
      /* JS Loaders */
      {
        test: /(\.js|\.jsx)$/,
        include: path.join(__dirname, 'app'),
        loaders: ['babel'],
      },
      /* CSS Loaders */
      { test: /(\.css)$/,
        loaders: [
          'style-loader',
          'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]&camelCase!postcss-loader',
        ],
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
