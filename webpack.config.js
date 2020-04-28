const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: ["@babel/polyfill", "./src/script.jsx"],
    
  output:{
    path:path.resolve(__dirname,"dist"),
    filename:"Main.jsx",
    publicPath:"/"
  },
  resolve: {
    alias: {
      "@dist": path.resolve(__dirname, './dist'),

    }
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
     },
     {
      test: /\.(png|svg|jpg|gif)$/,
      use: [
      'file-loader',
        ],
    },
    { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
    {
      test: /\.(woff|woff2|eot|ttf|otf)$/,
      use:[
        'file-loader',
      ]
    },
    { 
      test: /\.js$/, 
      exclude: /node_modules/, 
      loader: "babel-loader" ,
      options : {
        presets:[
          "@babel/preset-env"
        ]
      }
    },
    { 
      test: /\.jsx$/, 
      exclude: /node_modules/, 
      loader: "babel-loader" ,
      options : {
        presets:[
          "@babel/preset-react"
        ]
      }
    }
    ]
  },
  plugins:[
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template:"./src/index.html"
    }),
    new MiniCssExtractPlugin({
      filename:"MAIN1.css"
    })
  ],
<<<<<<< HEAD
  devServer: {},
=======
  devServer: {
   
  },
>>>>>>> 7ce9b34f0a6081684dae84dd7ac48691175437c3
  watch:true

  
}
// MiniCssExtractPlugin.loader