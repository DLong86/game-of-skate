import React from "react";

export default function Button({ text }) {
  return (
    <>
      <button onClick={() => jhconsole.log("Hello?")}>{text}</button>
    </>
  );
}
