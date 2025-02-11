const Events = () => {
  const handleMyEvent = () => {
    console.log("Evento ativado!");
  };

  const renderEvent = (x) => {
    if (x) {
      return <h1>Renderizando sendo true</h1>;
    } else {
      return <h1>Renderizando sendo false</h1>;
    }
  };
  return (
    <div>
      <div>
        <button onClick={handleMyEvent}>Clique aqui!</button>
      </div>
      <div>
        <button onClick={() => console.log("clicou arrow function no jsx")}>
          Clique aqui 2!
        </button>
        <button
          onClick={() => {
            if (true) {
              console.log("Isso não deveria existir :(");
            }
          }}
        >
          Clica aqui 3!
        </button>
      </div>
      {renderEvent(true)}
      {renderEvent(false)}
    </div>
  );
};

export default Events;
