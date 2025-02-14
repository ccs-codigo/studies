import "./App.css";
import CityImage from "./assets/city2.jpg";
import Contador from "./components/Contador";
import ListRender from "./components/ListRender";
import ManageData from "./components/ManageData";

function App() {
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
    </div>
  );
}

export default App;
