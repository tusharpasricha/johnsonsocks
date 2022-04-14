import Navbar from "./components/navbar";
import Contactbar from "./contactbar";
import About from "./components/about";
import Footor from "./components/footor";


function App() {
  return (
    <div className="App">
      <Contactbar/>
      <Navbar/>
      <About/>
      <Footor/>
    </div>
  );
}

export default App;
