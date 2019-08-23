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
    }, {
      test: /\.stories\.jsx?$/,
      use: [require.resolve('@storybook/addon-storysource/loader')],
      include: path.resolve(__dirname, 'src'),
      enforce: 'pre',
    }],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '',
    filename: 'carmichael-ui.js',
    library: 'carmichael-ui',
    libraryTarget: 'commonjs2'
  },
  externals: {
    "styled-components": {
      commonjs2: "styled-components",
    }
  },
  plugins: [
    new CleanWebpackPlugin(),
  ],
}
