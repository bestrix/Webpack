const path = require('path');
const html = require('html-webpack-plugin');
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
            // Creates `style` nodes from JS strings
            'style-loader',
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
      })
    ],
    watch:true
}