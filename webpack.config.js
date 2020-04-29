const path = require("path");


module.exports = {
  entry: ["@babel/polyfill", "./src/script.jsx"],
  output:{
    path:path.resolve(__dirname,"dist"),
    filename:"Main.js",
    publicPath:"/"
  },
  mode:"development",
      module: {
        rules: [
          {
            test: /\.m?js$/,
            exclude: /(node_modules|bower_components)/,
            loader:{
              loader: 'babel-loader',
              options:{
                presets:[
                  '@babel/preset-env'
                ],
                plugins:[
                  "@babel/plugin-proposal-class-properties"
                ]
              }
            }
          },
          {
            test: /\.jsx$/,
            exclude: /node_modules/,
            loader:{
              loader: 'babel-loader',
              options:{
                presets:[
                  '@babel/preset-env',
                  "@babel/preset-react"
                ],
                plugins:[
                  "@babel/plugin-proposal-class-properties"
                ]
              }
            }
          },
          
        ]
      }
}