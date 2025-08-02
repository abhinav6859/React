import React, { useState, useEffect } from "react";

function color() {
  const colors = ["lightblue", "black", "lightgreen", "blue", "purple"];
  const [colorIndex, setColorIndex] = useState(0);

  useEffect(() => {
    const currentColor = colors[colorIndex];
    document.body.style.backgroundColor = currentColor;
    document.documentElement.style.backgroundColor = currentColor;
  }, [colorIndex]);

  function handleSubmit() {
    setColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
  }

  return (
    <div style={{ padding: "20px" }}>
      <button type="button" class="theme-button" onClick={handleSubmit}>
        light
      </button>
    </div>
  );
}

export default color;
