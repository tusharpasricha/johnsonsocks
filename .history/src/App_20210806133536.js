import Navbar from "./components/navbar";
import Contactbar from "./contactbar";
import Temp from './components/temp.js'


function App() {
  return (
    <div className="App">
    <Contactbar/>
    <Navbar/>
    <Temp />
    </div>
  );
}

export default App;
