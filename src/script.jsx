import "./script2.js"
import "./style/style.sass"

import React from "react"
import {render} from "react-dom"

document.write("webpack is working")

function Welcome() {
    return <h1>Hello</h1>;
  }
  
  ReactDOM.render(
    <h1>Hello, world!</h1>,
    document.getElementById('test')
  );