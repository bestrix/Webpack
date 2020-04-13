const path = require('path');

module.exports = {
    entry: "./src/script.js", 
    output: {
      path: __dirname + '/dist', 
      filename: 'bundle.js', 
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
    }
}