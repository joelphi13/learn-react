import React from "react";
import ReactDOM from "react-dom";

function Greeting() {
  return (
    <div>
      <h1>Hi, I am Joel and this is my first component</h1>
    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <Greeting />
  </React.StrictMode>,
  document.getElementById("root")
);
