import { useState } from "react";

const Contador = () => {
  const [estado, setarEstado] = useState(0);

  function aumentar() {
    setarEstado(estado + 1);
  }

  function diminuir() {
    setarEstado(Math.max(0, estado - 1));
  }
  function resetContador() {
    setarEstado(0);
  }

  return (
    <div>
      <button onClick={aumentar}>Aumentar</button>
      <p>{estado}</p>
      <button onClick={diminuir}>Diminuir</button>
      <button onClick={resetContador}>Resetar contador</button>
    </div>
  );
};

export default Contador;
