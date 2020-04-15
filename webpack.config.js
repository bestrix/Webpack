const path = require('path');
// const html = require('html-webpack-plugin');
// const css = require('mini-css-extract-plugin');
const SpeedMeasurePlugin = require("speed-measure-webpack-plugin"); 
const smp = new SpeedMeasurePlugin();


module.exports = smp.wrap({
    entry: "./src/script.js", 
    output: {
      path: __dirname + '/dist', 
      filename: 'bundle.js', 
      publicPath:'/dist'
    },
    mode:"production",
})