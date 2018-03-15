var webpack = require('webpack')
var path = require('path')

module.exports = {
  entry:{
    app:'./src/index.js'
  },
  output:{
    filename: 'public/build/bundle.js',
    sourceMapFilename: 'public/build/bundle.map'
  },
  devtool: '#source-map',
  module: {

    rules: [
      {
          exclude: /node_modules/,
          loader: 'babel-loader',
          query:
            {
              "presets": ['react','babel-preset-env', 'stage-2']
            },

      },

      {
        test: /\.css$/,
        loader: ['style-loader', 'css-loader']
      },
      {
        test: /\.(jpg|png|gif|svg|pdf|ico|eot|ttf|woff|woff2)$/,
        loader: 'file-loader',
        options: {
            name: '[path][name]-[hash:8].[ext]'
        },
      },

    ],
  },

  performance: { hints: false }

}
