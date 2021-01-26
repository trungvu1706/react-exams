import React from "react";

function Button({ color }) {
  return (
    <div
      style={{
        width: 100,
        height: 20,
        color: color,
        background: "#f2f2f2",
        borderRadius: 5,
      }}
    >
      Button
    </div>
  );
}

export default Button;
