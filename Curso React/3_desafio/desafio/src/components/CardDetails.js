// exemplo de destructuring
const CardDetails = ({ brand, km, color, novo }) => {
  return (
    <div>
      <h2>Detalhes do carro</h2>
      <ul>
        <li>Marca: {brand}</li>
        <li>KM: {km}</li>
        <li>Cor: {color}</li>
        {novo ? <p>Carro novo.</p> : <p>Carro usado.</p>}
      </ul>
    </div>
  );
};

export default CardDetails;
