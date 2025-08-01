import React, { useState } from "react";
import Card from "./card";

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

  const [name, setName] = useState("");
  const [headingtext, setHeading] = useState("");

  function handleChange(event) {
    console.log(event.target.value);
    setName(event.target.value);
  }

  function handleClick(event) {
    setHeading(name);

    event.preventDefault();
  }

  return (
    <div className="container">
      <div className="note">
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
      {/* <div className="box">This has a border</div> */}
      <div className="note">
        <h1>Hello {headingtext}</h1>
        <form onSubmit={handleClick}>
          <input
            onChange={handleChange}
            type="text"
            placeholder="What's your name?"
            // value={name}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default App;
