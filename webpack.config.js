const { CleanWebpackPlugin } = require('clean-webpack-plugin') // eslint-disable-line import/no-extraneous-dependencies
const webpack = require('webpack') // eslint-disable-line import/no-extraneous-dependencies
const path = require('path')

module.exports = {
  entry: './src/index.js',
  mode: 'production',
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      use: ['babel-loader']
    }],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: 'index.js',
  },
  plugins: [
    new CleanWebpackPlugin(),
  ],
}
