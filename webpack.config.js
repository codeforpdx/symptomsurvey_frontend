const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin')
const { readFileSync } = require('fs');

const publicKey = readFileSync('./keys/token.pub', 'utf-8');

const ENVIRONMENT = process.env.NODE_ENV || 'development';
const url = ENVIRONMENT === 'production' ? 'mycoolurl' : 'localhost';
const port = ENVIRONMENT === 'development' ? ':8080' : '';

module.exports = {
  mode: ENVIRONMENT,
  context: path.resolve(__dirname, 'src'),
  entry: [
    'react-hot-loader/patch',
    `webpack-dev-server/client?http://${url}${port}`,
    'webpack/hot/only-dev-server',
    './index.jsx',
  ],
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    // activates HMR

    new HtmlWebpackPlugin({
      inject: true,
      template: './index.html',
    }),

    //For the favicon
    new FaviconsWebpackPlugin('./images/county_logo_small.png'),

    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
      'process.env.PUBLIC_KEY': JSON.stringify(publicKey),
      'process.env.G_MAPS_KEY': JSON.stringify(process.env.G_MAPS_KEY)
    }),
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.jsx',
  },
  devServer: {
    hot: true,
    // activate hot reloading

    contentBase: path.resolve(__dirname, 'dist'),
    // match the output path

    publicPath: '/',
    // match the output `publicPath`
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015', 'stage-2', 'react'],
          },
        },
      },
      {
        test: /\.(png|jpg|gif|webp)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
