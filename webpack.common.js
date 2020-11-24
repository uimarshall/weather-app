
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {


  entry: {
    main: './src/index.js',
    vendor: './src/vendor.js',
  },

  plugins: [new HtmlWebpackPlugin({
    template: './src/template.html',
  })],
  module: {
    rules: [

      {
        test: /\.html$/i,
        loader: 'html-loader',
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: {
          loader: 'file-loader',
          options: {
            name: '[path][name].[hash].[ext]',
            outputPath: 'images',
          },
        },
      },

    ],
  },
};