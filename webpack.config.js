const path = require('path');

module.exports = {
    entry: "./src/script.js", 
    output: {
      path: __dirname + '/dist', 
      filename: 'bundle.js', 
    },
    mode:"production"
}