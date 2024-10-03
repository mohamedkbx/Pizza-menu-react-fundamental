import React from "react";
import ReactDOM from "react-dom/client";

function App() {
  return <h1>Hello World!!!!</h1>;
}

const elementRoot = document.querySelector("#root");
const root = ReactDOM.createRoot(elementRoot);

root.render(<App />);
