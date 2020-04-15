const path = require('path');
const html = require('html-webpack-plugin');
const css = require('mini-css-extract-plugin');
module.exports = {
    entry: "./src/script.js", 
    output: {
      path: __dirname + '/dist', 
      filename: 'bundle.js', 
      publicPath:'/dist'
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
            // Translates CSS into CommonJS
            'css-loader',
            // Compiles Sass to CSS
            'sass-loader',
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