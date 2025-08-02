import React, { useState } from "react";
import Card from "./card";
import Color from "./color";

function App() {
  const [headingText, setHeadingText] = useState("Hello");
  const [buttonColor, setButtonColor] = useState("white");
  const [showCard, setShowCard] = useState(false);
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

  const [headingtext, setHeading] = useState("");
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setContact((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault(); // ✅ Prevent form reload
    console.log("Submitted:", contact);
  }
  return (
    <div className="container">
      <Color />
      <div className="note">
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

      <div className="note">
        <h1>
          Hello {contact.fName} {contact.lName}
        </h1>
        <p>{contact.email}</p>
        <form onSubmit={handleSubmit}>
          <input
            onChange={handleChange}
            name="fName"
            value={contact.fName}
            placeholder="First Name"
          />
          <input
            onChange={handleChange}
            name="lName"
            value={contact.lName}
            placeholder="Last Name"
          />
          <input
            onChange={handleChange}
            name="email"
            value={contact.email}
            placeholder="Email"
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default App;
