import React from "react";
import ReactDOM from "react-dom";

function Greeting() {
  return (
    <div>
      <Person />
      <Message />
    </div>
  );
}

function Person() {
  return <h1>Joel Philip</h1>;
}

const Message = () => <p>This is an example of nested components</p>;

ReactDOM.render(
  <React.StrictMode>
    <Greeting />
  </React.StrictMode>,
  document.getElementById("root")
);
