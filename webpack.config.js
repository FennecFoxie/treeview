var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
    app: ['./js/main.js', './styles/main.scss'],
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].bundle.js'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel-loader',
      query: {
        presets: ['es2015']
      }
    }],
    rules: [
      // { // regular css files
      //   test: /\.css$/,
      //   loader: ExtractTextPlugin.extract({
      //     loader: 'css-loader?importLoaders=1',
      //   }),
      // },
      { // sass / scss loader for webpack
        test: /\.(sass|scss)$/,
        loader: ExtractTextPlugin.extract(['css-loader', 'sass-loader'])
      }
    ]
  },
  plugins: [
   new ExtractTextPlugin({ // define where to save the file
     filename: '[name].bundle.css',
     allChunks: true,
   }),
 ],
  stats: {
    colors: true
  },

  devtool: 'source-map',
};
