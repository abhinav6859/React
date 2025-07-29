import React, { useState } from "react";
import Card from "./card";
const customstyle = {
  backgroundColor: "black",
};
function App() {
  const [headingText, setHeadingText] = useState("Hello");
  const [buttonColor, setButtonColor] = useState("white");
  const [showCard, setShowCard] = useState(false);
  const [light, dark] = useState("light");
  function changeHeading() {
    setHeadingText("New Heading Text!");

    // Change it back to "Hello" after 5 seconds
    setTimeout(() => {
      setHeadingText("Hello");
    }, 5000);
  }
  function c() {
    setButtonColor("black");
    setShowCard(true);
  }
  function d() {
    setButtonColor("white");
    setShowCard(false);
  }
  function changeTheme() {
    dark("dark");
  }

  return (
    <div className="container" style={customstyle}>
      <button type="button" onClick={changeTheme} class="theme-button">
        {light}
      </button>
      <h1>{headingText}</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        style={{ backgroundColor: buttonColor }}
        onMouseOver={c}
        onMouseOut={d}
        onClick={changeHeading}
      >
        Submit
      </button>
      {showCard && <Card />}
    </div>
  );
}

export default App;
