import Navbar from "./components/navbar";
import Contactbar from "./contactbar";
import Temp from './components/temp.js'
import Footor from "./components/footor";


function App() {
  return (
    <div className="App">
    <Contactbar/>
    <Navbar/>
    <Temp />
    <Footor/>
    </div>
  );
}

export default App;
