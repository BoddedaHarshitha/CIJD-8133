import React from "react";
import ReactDOM from "react-dom";
var parent=React.createElement("div",{},React.createElement("h1",{},"welcome to java script"),React.createElement("h2",{},"welcome to react"),React.createElement("h3",{},"use jsx syntax instead of java script syntax"));
var htmlRoot=document.getElementById("root")
var rootReact=ReactDOM.createRoot(htmlRoot)
rootReact.render(parent);
// using jsx syntax;
var jav=(
    <h1>welcome to java script
    <h2>welcome to react 
    <h3>use jsx syntax instead of java script syntax</h3>
    </h2>
    </h1>)
var cer=document.getElementById("root")
var reactroot=ReactDOM.createRoot(cer)
reactroot.render(jav)