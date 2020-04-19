//>30 базовая настройка
//>40 настройка двух точек входв и имени по хешу
//>50 установка плагина html и clean-webpack-plugin настройка script в pachage.json
//>60 context для того чтобы не пропис полный путь и подкл css loader
//>1.10 import json and image
// const path = require('path');
// const html = require('html-webpack-plugin');
// const css = require('mini-css-extract-plugin');
const SpeedMeasurePlugin = require("speed-measure-webpack-plugin"); 
const smp = new SpeedMeasurePlugin();
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
const path = require('path');
const html = require('html-webpack-plugin');
const css = require('mini-css-extract-plugin');

//публичный путь картинки
//шрифты
//jquery
//css normalize
//bootsrrap
module.exports = {
    entry: "./src/script.js", 
    output: {
      path: __dirname + '/dist', 
      filename: 'bundle.js', 
      //publicPath:'/dist'
    },
    mode:"production",
    module:{
      rules:[
        { 
          test: /\.s[ac]ss$/,
          use: [
            {
              loader: css.loader,
              options: {
                publicPath: './dist',
              },
            },
            'css-loader',
            'sass-loader',
          ],
        },
        {
          test: /\.(png|svg|jpg|gif)$/,
          use: [
            'file-loader',
          ],
        },
       {
         test: /\.(woff|woff2|eot|ttf|otf)$/,
         use: [
           'file-loader',
         ],
       },
      ]
    },
    devServer: {
      contentBase: path.join(__dirname, 'dist'),
      compress: true,
      port: 9000
    },
    plugins:[
      new html({
        template:"./src/index.html",
        filename:'test.html',
        minify:false
      }),
      new css({
        filename: 'fuck.css',
        chunkFilename: '[id].css',
      })
    ],
    watch:true
}