var path = require('path');
const webpack = require('webpack')
var autoprefixer = require('autoprefixer');
var MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'vkappui.js',
    libraryTarget: 'commonjs2'
  },
  module: {
    rules: [
      {
        test: /.js$/,
        include: path.resolve(__dirname, 'src'),
        exclude: /(node_modules|bower_components|dist)/,
        use: {
          loader: 'babel-loader',
          options: {},
        }
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
				modules: true,
				importLoaders: 1,
              localIdentName: "[local]__hs0tag",
            }
          },
          {
            loader: 'sass-loader',
            options: {
              plugins: () => {
                return [
                  autoprefixer()
                ];
              }
            }
          }
        ]
      }
    ]
  },
  plugins: [
	  new MiniCssExtractPlugin({filename: "vkappui.css"}),
	  new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
  ],
  externals: {
    'react': 'commonjs react'
  }
};