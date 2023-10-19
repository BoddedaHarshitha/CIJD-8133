import React from "react";
import ReactDOM from "react-dom";
var reactHeadOne=<h1> Java sdcript
                <h2> React
                    <h3> jsx</h3>
                </h2>
            </h1>
var rootElement=document.getElementById("root");
var rootCont=ReactDOM.createRoot(rootElement);
rootCont.render(reactHeadOne);
function Welcome() {
    return <h1>Hello</h1>;
  }
rootCont.render(<Welcome/>)
