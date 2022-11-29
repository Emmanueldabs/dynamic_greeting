import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const cssstyle={};
let cdate=new Date().getHours();
let greeting="";

if(cdate>=1 && cdate<12){
  greeting="G☀☀d M☀rning";
  cssstyle.color="purple";
}
else if(cdate >=12 && cdate<17){
  greeting="G🅾⭕d Aftern🛑⭕n";
  cssstyle.color="yellow";
}
else if(cdate >=17 && cdate>20){
  greeting="G🌌🌌d Evening 🌃";
  cssstyle.color="blue";
}
else{
  greeting="G🌕🌕d Night🌙";
  cssstyle.color="black";
}
ReactDOM.render(
  <>
    <h1>Hello World, <span style={cssstyle}>{greeting}</span></h1>
  </>,
  document.getElementById("root")
);