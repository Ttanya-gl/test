const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: {
    'js/app.js': './src/app.js',
    'css/style.css': './src/scss/all.scss'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: "[name]"
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader']
        })
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('style.css')
  ]
};