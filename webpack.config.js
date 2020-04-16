//>30 базовая настройка
//>40 настройка двух точек входв и имени по хешу
//>50 установка плагина html и clean-webpack-plugin настройка script в pachage.json
//>60 context для того чтобы не пропис полный путь и подкл css loader
//>1.10 import json and image
const path = require('path');
const html = require('html-webpack-plugin');
// const css = require('mini-css-extract-plugin');
const SpeedMeasurePlugin = require("speed-measure-webpack-plugin"); 
const smp = new SpeedMeasurePlugin();
const {CleanWebpackPlugin} = require("clean-webpack-plugin");


module.exports = smp.wrap({
  //абсолютный путь к паки сорс для entry
    context: path.resolve(__dirname,"./src"),
    entry: {
      main:'./script.js',
      main2:'./script2.js'
    }, 
    output: {
      path: __dirname + '/dist', 
      filename: '[name][contenthash].js', 
      publicPath: path.join(__dirname,"./dist")
    },
    mode:"production",
    module:{
      rules:[
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        },
        {
        test:/\.css/,
        use:["style-loader", "css-loader"]
      },
      {
        test:/\.s[ac]ss/,
        use:["style-loader", "css-loader","sass-loader"]
      },
      {
        test: /\.(png|jpe?g|gif)$/,
        loader: 'file-loader',
        options: {

        },
      },
      ]
    },
    plugins:[
      new html({
        filename:"main.html",
        template:"./index.html"
      }),
      new CleanWebpackPlugin()
    ]
})