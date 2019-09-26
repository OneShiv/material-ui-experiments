import React from "react";
import ReactDOM from "react-dom";
import ChipTry from "./ChipTry";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <ChipTry />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
