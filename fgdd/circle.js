import React from "react";

const Circle = () => {
  const circleStyle = {
    width: "100px",
    height: "100px",
    backgroundColor: "blue",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    fontSize: "16px",
  };

  return <div style={circleStyle}>Circle</div>;
};

function App() {
  return (
    <div>
      <h1>Preview Circle</h1>
      <Circle />
    </div>
  );
}

export default App;
