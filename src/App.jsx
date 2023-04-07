import React from "react";
import { useState } from "react";
import "./App.css";

const App = () => {
  const [inputValue, setinputValue] = useState(0);

  const increment = () => {
    setinputValue(inputValue + 1);
  };

  const decrement = () => {
    setinputValue(inputValue - 1);
  };

  return (
    <div className=" main1">
      <div>
        <h2 className="main2"> Counter App Using use State Hook in React Js</h2>
      </div>

      <input
        className="input"
        type="number"
        value={inputValue}
      />
      <br />
      <br />
      <div>
        <button onClick={increment}>
          <h1 className="btn"> + </h1>
        </button>

        <button onClick={decrement}>
          <h1 className="btn">-</h1>
        </button>
      </div>
    </div>
  );
};

export default App;
