// usei o atalho "rfce" para criar a base desse arquivo

import { useState } from "react";

const ManageData = () => {
  let someData = 10;

  console.log(someData);

  const [number, setNumber] = useState(15);

  console.log(number);

  return (
    <div>
      <div>
        <p>Valor: {someData}</p>
        {/* exemplo do button abaixo nao funciona */}
        <button onClick={() => (someData = 15)}>
          Mudar variável "nao funciona"
        </button>
      </div>
      <div>
        <p>Valor: {number}</p>
        {/* exemplo abaixo que funciona */}
        <button onClick={() => setNumber(25)}>Mudar o state para 25</button>
      </div>
      <div>
        <p>Valor: {number}</p>
        {/* exemplo abaixo que funciona */}
        <button onClick={() => setNumber(50)}>Mudar o state para 50</button>
      </div>
    </div>
  );
};

export default ManageData;
