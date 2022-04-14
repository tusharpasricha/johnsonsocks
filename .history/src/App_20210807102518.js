import Navbar from "./components/navbar";
import Contactbar from "./contactbar";
import About from "./components/about";
import Footor from "./components/footor";

import Beforefootor from "./components/beforefootor";


function App() {
  return (
    <div className="App">
      {/* <Contactbar/> */}

      <Navbar/>
      <About/>
      <Beforefootor/>
      <Footor/>
    </div>
  );
}

export default App;
