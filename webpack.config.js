const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const uglifyJsPlugin = require('terser-webpack-plugin');

module.exports = {
  entry: {
    index: './src/index.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    contentBase: './dist',
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.(sc|sa|c)ss$/i,
        use: [MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
          'resolve-url-loader'
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader',
        ],
      },
    ],
  },
  plugins: [
    new uglifyJsPlugin(),
    new MiniCssExtractPlugin(),
    new CleanWebpackPlugin({cleanStaleWebpackAssets: false}),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'templates/index.html')
    }),
  ],
};
