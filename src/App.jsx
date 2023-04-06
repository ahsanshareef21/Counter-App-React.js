import React from "react";
import { useState, useEffect } from "react";
import "./App.css";

const App = () => {
  const [inputValue, setinputValue] = useState(0);

  // const btnStyle = {
  //   padding: 20,
  //   border: "none",
  //   backgroundColor: "red",
  //   border: "5px solid white",
  //   // padding: "5px",
  //   margin: 10,
  // };

  const increment = () => {
    setinputValue(inputValue + 1);
  };

  const decrement = () => {
    setinputValue(inputValue - 1);
  };

  useEffect(() => {
    console.log("useEffect Hook");
  }, []);

  return (
    <div>
      <input
        style={{
          padding: "20px",
          border: "2px solid blue",
        }}
        type="number"
        placeholder=" Enter Somthing"
        alt="Form "
        value={inputValue}
      />

      <button style={btnStyle} onClick={increment}>
        <h1>+</h1>{" "}
      </button>
      <button style={btnStyle} onClick={decrement}>
        {" "}
        <h1>-</h1>{" "}
      </button>
    </div>
  );
};

export default App;
