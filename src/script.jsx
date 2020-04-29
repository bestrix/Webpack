// import "./script2.js"
// import "./style/style.sass"

import React from 'react';
import ReactDOM from 'react-dom';

document.write("webpack is working")

const element = React.createElement(
  'h1',
  {className: 'greeting'},
  'Hello, world!'
);
  
  ReactDOM.render(
    element,
    document.getElementById('content')
  )