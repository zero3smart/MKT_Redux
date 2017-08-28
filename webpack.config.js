const path = require('path');
const webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  devtool: 'inline-sourcemap',
  entry: [
    path.join(__dirname, '/src/index.js')
  ],
  output: {
    path: path.join(__dirname, '/public'),
    filename: 'bundle.js',
  },
  devServer: {
    hot: true,
    inline: true,
    port: 8080,
    historyApiFallback: true
  },
  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      title: 'MKT',
      filename: 'index.html',
      template: 'src/index.html',
      inject: 'body',
      favicon: 'public/favicon.ico',
      hash: true,
      cache: true
    }),
    new webpack.ProvidePlugin({
      jQuery: 'jquery',
      $: 'jquery',
      jquery: 'jquery'
    })
  ],
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        include: [
          path.join(__dirname, 'src'),
        ],
        exclude: /(node_modules|bower_components)/,
        loaders: [ 'react-hot-loader', 'babel-loader' ]
      },
      {
        test: /\.css$/,
        include: [
           /node_modules/
        ],
        loaders: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.scss$/,
        include: [
          path.join(__dirname, 'src'),
        ],
        loaders: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.sass$/,
        include: [
          path.join(__dirname, 'src')
        ],
        loaders: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /.*\.(gif|png|jpe?g|eot|woff2|woff|ttf|svg)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8000,
            },
          },
        ]
      },
      {
        test: /\.tsv$/,
        include: [
          path.join(__dirname, 'src/data')
        ],
        loaders: ["dsv-loader"]
      }
    ]
  },
  resolve: {
    modules: ['node_modules'],
      alias: {
        'react-d3-map-choropleth.css': path.join(__dirname, '../node_modules/react-d3-map-choropleth/css/react-d3-map-choropleth.css')
       }
  },
  node: {
    net: 'empty',
    dns: 'empty'
  }
}