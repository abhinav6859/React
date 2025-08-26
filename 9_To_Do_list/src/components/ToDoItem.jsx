
import React, { useState } from "react";

function ToDoItem(props) {
  const [isChecked, setIsChecked] = useState(false);

  function handleCheckboxChange() {
    setIsChecked((prev) => !prev);
  }

  return (
    <li>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleCheckboxChange}
      />
      <span
        onClick={() => props.onChecked(props.id)}
        style={{
          textDecoration: isChecked ? "line-through" : "none",
          cursor: "pointer",
        }}
      >
        {props.text}
      </span>
    </li>
  );
}

export default ToDoItem;
