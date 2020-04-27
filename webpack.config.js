const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry:"./src/script",
    
  output:{
    path:path.resolve(__dirname,"dist"),
    filename:"Main.js"
  },
  module:{
    rules:[
      {
      test: /\.s[ac]ss/i,
      use:[MiniCssExtractPlugin.loader,"css-loader","sass-loader"]
     },
     {
       test:/\.js/,
       use:{
        loader: 'babel-loader',
       }
     }
    ]
  },
  plugins:[
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename:"MAIN1.css"
    })
  ]
}
// MiniCssExtractPlugin.loader