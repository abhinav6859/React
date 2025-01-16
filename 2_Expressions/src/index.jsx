import React from "react";
import ReactDOM from "react-dom";

const fName = "Abhinav";
const lName = "Vats";
const num = 7;
const num1 = new Date().getFullYear();

ReactDOM.render(
  <div>
    <h1>Hello {fName + " " + lName}!</h1>
    <p>Your lucky number is {num}</p>

    <p>Copyright {num1} .</p>
  </div>,
  document.getElementById("root")
);

// If you're running this locally in VS Code use the commands:
// npm install
// to install the node modules and
// npm run dev
// to launch your react project in your browser
