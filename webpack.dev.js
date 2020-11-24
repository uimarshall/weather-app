
const Dotenv = require('dotenv-webpack');
const path = require('path');
// webpack-merge v5 (and later)
const { merge } = require('webpack-merge');
const common = require('./webpack.common');



module.exports = merge(common, {
  mode: 'development',
 
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
        
          'style-loader',
         
          'css-loader',
          
          'sass-loader',
        ],
      },
    ],
  },
  plugins: [
    new Dotenv()
  ],
  node: {
   fs: "empty"
}


});