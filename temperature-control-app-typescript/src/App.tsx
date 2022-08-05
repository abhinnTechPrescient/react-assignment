import ButtonComp from "./UI-Component/Button/ButtonComp";
import axios from "axios";
import UserList from "./UserList";
import React, { useEffect, useState } from "react";
import "./App.css";
import UserModal from "./Modal/userModal";

function App() {
  let [counterValue, setCounterValue] = useState<number>(17);
  let [usersData, setUserData] = useState<UserModal[]>([]);

  const incrmentCounter = () => {
    let newValue = counterValue + 1;
    setCounterValue(newValue);
  };

  const decrementCounter = () => {
    let newValue = counterValue - 1;
    setCounterValue(newValue);
  };

  useEffect(() => {
    if (counterValue === 24) {
      fetchUses();
    }
  }, [counterValue]);

  const fetchUses = async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );

    const users: UserModal[] = response.data.map((user: any) => {
      return {
        id: user.id,
        name: user.name,
        username: user.username,
        email: user.email,
        phone: user.phone,
        website: user.website,
      };
    });

    setUserData(users);
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
          <ButtonComp
            value="+"
            counter={incrmentCounter}
            disable={counterValue === 30}
            backgroundColor="#615f60"
          />
          <ButtonComp
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
