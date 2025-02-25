import { useState } from "react";
import "./App.css";
import CityImage from "./assets/city2.jpg";
import ConditionalRender from "./components/ConditionalRender";
import Contador from "./components/Contador";
import ListRender from "./components/ListRender";
import ManageData from "./components/ManageData";
import ShowUserName from "./components/ShowUserName";
import CardDetails from "./components/CardDetails";

function App() {
  const [useName] = useState("Maria Joaquina");

  const cars = [
    {
      id: 1,
      brand: "Ferrari",
      color: "Amarela",
      novo: true,
      km: 0,
    },
    {
      id: 2,
      brand: "Opala",
      color: "Preto",
      novo: false,
      km: 200000,
    },
    {
      id: 3,
      brand: "Celta",
      color: "Azul",
      novo: false,
      km: 120000,
    },
  ];

  return (
    <div className="App">
      <h1>Avançando em React</h1>
      {/* imagem direto do public */}
      <div>
        <img src="/city.jpg" alt="Paisagem" />
      </div>
      {/* imagem pelo assets do src deve ser importada no topo */}
      <div>
        <img src={CityImage} alt="Paisagem" />
      </div>
      <ManageData></ManageData>
      <ListRender></ListRender>
      <Contador></Contador>
      <ConditionalRender></ConditionalRender>
      {/* abaixo estão 3 maneiras de usar o props */}
      {/* <ShowUserName name="Gabriel Prop"></ShowUserName> */}
      {/* <ShowUserName name={name}></ShowUserName> */}
      <ShowUserName name={useName}></ShowUserName>
      {/* exemplo de destructuring */}
      <CardDetails
        brand={"Crevollet"}
        km={100000}
        color={"Preto"}
        novo={false}
      ></CardDetails>
      {/* reaproveitando */}
      <CardDetails
        brand="Ford"
        color="Vermelha"
        km={0}
        novo={true}
      ></CardDetails>
      <CardDetails
        brand="Fiat"
        color="Branco"
        km={4500}
        novo={false}
      ></CardDetails>
      {/* loop em array de objetos */}
      {cars.map((car) => (
        <CardDetails
          brand={car.brand}
          color={car.color}
          km={car.km}
          novo={car.novo}
        ></CardDetails>
      ))}
    </div>
  );
}

export default App;
