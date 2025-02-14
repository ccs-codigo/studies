import { useState } from "react";

const ListRender = () => {
  const [list] = useState(["Matheus", "João", "Gabriel"]);

  const [users, setUsers] = useState([
    { id: 1, age: 20, nome: "Larissa" },
    { id: 2, age: 39, nome: "Daniel" },
    { id: 3, age: 63, nome: "Eliza" },
  ]);

  const deleteRandom = () => {
    const randomNumber = Math.floor(Math.random() * 4);
    console.log(randomNumber);

    setUsers((prevUsers) => {
      console.log(prevUsers);
      return prevUsers.filter((user) => randomNumber !== user.id);
    });
  };

  return (
    <div>
      <ul>
        {list.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.nome} - {user.age}
          </li>
        ))}
      </ul>
      <button onClick={deleteRandom}>Delete random user</button>
    </div>
  );
};

export default ListRender;
