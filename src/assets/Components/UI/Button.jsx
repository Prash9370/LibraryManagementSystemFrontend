import React from "react";

function Button({ text, onClick, color }) {
  return (
    <button className={`btn btn-${color}`} onClick={onClick}>
      {text}
    </button>
  );
}

export default Button;
