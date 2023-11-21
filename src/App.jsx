import "./App.scss";
import { useState } from "react";
import UserForm from "./components/UserForm/UserForm";
import UserCard from "./components/UserCard/UserCard";

const App = () => {
  const initialUsers = JSON.parse(localStorage.getItem("alumns")) || [];
  const [users, setUsers] = useState(initialUsers);

  const createUser = (newUser) => {
    const newUsers = [...users, newUser];
    localStorage.setItem("alumns", JSON.stringify(newUsers))
    setUsers(newUsers);
  };
  const deleteUser = (user) => {
    const fiteredUsers = users.filter((users) => users !== user);
    localStorage.setItem("alumns", JSON.stringify(fiteredUsers));
    setUsers(fiteredUsers);
  };
  const editUser = (user, newUserData) => {
    const newUser = users.map((us) => {
      if (us === user) return newUserData;
      return us;
    });
    localStorage.setItem("users", newUser);
    setUsers(newUser);
  };
  return (
    <div className="App">
      <UserForm createUser={createUser} />
      <h2 className="Users-title">Usuarios</h2>
      <div>
        {users.length === 0 && <p className="">No hay ningún usuario</p>}
      </div>
      <UserCard deleteUser={deleteUser} editUser={editUser} users={users} />
    </div>
  );
};

export default App;
