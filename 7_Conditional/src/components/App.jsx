import React from "react";
import Login from "./login";

var a = true;

const currenttime = new Date().getHours();
function App() {
  return (
    <div className="container">
      {!a ? <h1>Hello</h1> : <Login />}
      {currenttime < 12 ? <h1>why are you still working</h1> : null}
    </div>
  );
}

export default App;
