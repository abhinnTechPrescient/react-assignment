import React from "react";
import UserModal from "./Modal/userModal";
import "./UserList.css";

const UserList: React.FC<{ users: UserModal[] }> = ({ users }) => {
  return (
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
        {users.map((user) => (
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
  );
};

export default UserList;
