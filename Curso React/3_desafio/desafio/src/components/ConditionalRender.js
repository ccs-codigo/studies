import { useState } from "react";

const ConditionalRender = () => {
  const [x] = useState(false);

  const [name, setName] = useState("Irineu");

  return (
    <div>
      <h2>Isso será exibido?</h2>
      {x && <p>Se x for true, sim!</p>}
      {!x && <p>Se x for false, não!</p>}
      <h2>If ternário no JSX</h2>
      {name === "Gabriel" ? (
        <div>
          <p>O nome é Gabriel</p>
        </div>
      ) : (
        <div>
          <p>Nome não encontrado.</p>
        </div>
      )}
      <button onClick={() => setName("Gabriel")}>Mudar nome</button>
    </div>
  );
};

export default ConditionalRender;
