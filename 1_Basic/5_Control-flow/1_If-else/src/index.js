//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.

import React from "react";
import ReactDom from "react-dom";

const time = new Date().getHours();

let says;
const customstyle = {
  color: "red",
};

if (time < 12) says = "Good Morning";
else if (time < 18) {
  says = "Good Afternoon";
  customstyle.color = "green";
} else {
  says = "Good Night";
  customstyle.color = "blue";
}
ReactDom.render(
  <div>
    <h1>hello</h1>
    <h1 class="heading" style={customstyle}>{says}</h1>
  </div>,

  document.getElementById("root")
);
