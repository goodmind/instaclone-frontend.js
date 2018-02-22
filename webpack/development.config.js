const { resolve } = require('path')
const {
  LoaderOptionsPlugin,
  HotModuleReplacementPlugin,
} = require('webpack')
const merge = require('webpack-merge')
const Jarvis = require('webpack-jarvis')

const { config, DIST } = require('./common')


module.exports = merge(config, {
  profile: true,

  output: {
    filename: '[name].js',
    path: DIST,
    pathinfo: true,
  },

  performance: {
    hints: false,
  },

  plugins: [
    new Jarvis({
      port: 3005,
    }),
    new LoaderOptionsPlugin({
      debug: true,
      minimize: false,
    }),
    new HotModuleReplacementPlugin(),
  ],

  devServer: {
    contentBase: resolve(__dirname, '..', 'public'),
    // hot: true,
    noInfo: true,
    historyApiFallback: true,
    inline: false,
    stats: {
      colors: true,
      chunks: false,
      children: false,
    },
    watchOptions: {
      aggregateTimeout: 300,
      poll: true,
    },
    port: 3001,
    host: 'localhost',
  },
})

