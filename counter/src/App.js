import "./App.css";
import { useState } from "react";
import Button from "./UI-Component/Button/Button";

const App = () => {
  let [counterValue, setCounterValue] = useState(0);

  const incrmentCounter = () => {
    let newValue = counterValue + 1;
    setCounterValue(newValue);
  };

  const decrementCounter = () => {
    let newValue = counterValue - 1;
    setCounterValue(newValue);
  };

  const resetCounter = () => {
    console.log("reset");
    setCounterValue(0);
  };

  return (
    <div style={{ marginTop: "50px" }}>
      <h1 style={{ textAlign: "center" }}>Counter App</h1>
      <div className="wrapper">
        <div className="counterwrapper">
          <div className="counter">{counterValue}</div>
        </div>
        <div className="buttonwrapper">
          <Button value="+" counter={incrmentCounter} disable={false} />
          <Button value="reset" counter={resetCounter} disable={false} />
          <Button
            value="-"
            counter={decrementCounter}
            disable={counterValue === 0}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
