import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  let [usersData, setUserData] = useState([]);

  useEffect(() => {
    fetchUses();
  }, []);

  const fetchUses = async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    setUserData(response.data);
  };

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>User Data</h1>
      <div className="users">
        <table>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>username</th>
            <th>email</th>
            <th>phone</th>
            <th>wsebsite</th>
          </tr>
          {usersData.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>{user.website}</td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
}

export default App;
