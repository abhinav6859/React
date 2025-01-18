import React from "react";
import ReactDOM from "react-dom";

const fName = "Abhinav vats";

const num = 2025;

const img = "https://picsum.photos/200/300";

const customstyle = {
  color: "red",
  fontSize: "40px",
  border: "1px solid black",
};
customstyle.color = "green"; // update color
ReactDOM.render(
  <div>
    <h1 class="heading" contentEditable spellcheck="false">
      Created by {fName + "       "}!
    </h1>
    <p>Copyright {num}</p>
    <div>
      <img src={img}></img>
      <h1>Welcome to my app</h1>
      <h1 style={{ color: "red" }}>huhuhh</h1>,
      <h1 style={customstyle}>hello world !</h1>,
    </div>
  </div>,

  document.getElementById("root")
);
