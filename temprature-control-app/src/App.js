import { useState, useEffect } from "react";
import Button from "./UI-Component//Button/Button";

import "./App.css";
import axios from "axios";
import UserList from "./UserList";

function App() {
  let [counterValue, setCounterValue] = useState(17);
  let [usersData, setUserData] = useState([]);

  const incrmentCounter = () => {
    let newValue = counterValue + 1;
    setCounterValue(newValue);
  };

  const decrementCounter = () => {
    let newValue = counterValue - 1;
    setCounterValue(newValue);
  };

  useEffect(() => {
    if (counterValue >= 24 && usersData.length === 0) {
      fetchUses();
    }
  }, [counterValue]);

  const fetchUses = async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    setUserData(response.data);
  };

  return (
    <div style={{ marginTop: "50px" }}>
      <h1 className="text-center">Temperature Control App </h1>
      <div className="wrapper">
        <div className="counterwrapper">
          <div
            className={`counter ${
              counterValue > 24 ? "temparature_alert" : "temparature_normal"
            }`}
          >
            {counterValue}&deg;C
          </div>
        </div>
        <div className="buttonwrapper">
          <Button
            value="+"
            counter={incrmentCounter}
            disable={counterValue === 30}
            backgroundColor="#615f60"
          />
          <Button
            value="-"
            counter={decrementCounter}
            disable={counterValue === 17}
            backgroundColor="#adacad"
          />
        </div>
      </div>
      {usersData && usersData.length > 0 && (
        <div>
          <h1 className="text-center">Users Data</h1>
          <UserList users={usersData} />
        </div>
      )}
    </div>
  );
}

export default App;
