import Navbar from "./components/navbar";
import Contactbar from "./contactbar";
import Footor from "./components/footor";
import About from "./components/about";


function App() {
  return (
    <div className="App">
      <Contactbar/>
      <Navbar/>
      <About/>
    </div>
  );
}

export default App;
