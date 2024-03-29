import React from "react";

export default function Button({ text, onClick, value }) {
  return (
    <>
      <button onClick={onClick} value={value}>
        {text}
      </button>
    </>
  );
}
