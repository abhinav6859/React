import React from "react";
import ReactDOM from "react-dom";

import * as pi from "./Math.jsx"; //for all as pi

// import pi, { doublepi, triplepi , add, subtract, multiply, divide } from "./Math.jsx"; one by one import
{
  /* <li>{pi}</li>
<li>{doublepi()}</li>
<li>{triplepi()}</li> 
soo onn*/
}


function App() {
  return (
    <ul>
      <li>{pi.default}</li>
      <li>{pi.doublepi()}</li>
      <li>{pi.triplepi()}</li>

      <li>{pi.add(1, 2)}</li>
      <li>{pi.multiply(2, 3)}</li>
      <li>{pi.subtract(7, 2)}</li>
      <li>{pi.divide(5, 2)}</li>
    </ul>
  );
}
export default App;
