import React, { useState, useEffect } from "react";
import NavBar from './components/User/NavBar';
import About from './components/User/About';
import Home from './components/User/Home';
import Contact from './components/User/Contact';
import Template from "./components/User/Template";
import Card from './components/UI/Card';
import db from './components/Data/Data';
import Beforefootor from './components/User/beforefootor'
import Footor from './components/User/footor'

import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';

function App() {

  const [datas, setDatas] = useState([]);

  useEffect(() => {

    db.collection('infos').get().then((snapshot) => {
    let temp = [];
    snapshot.docs.forEach((doc) => {
      
        temp = [
          ...temp,
          {image:doc.data().image, title: doc.data().title, desc: doc.data().desc}
        ]
    });
    setDatas(temp);

  });

  }, []);

  return (
    <Router>
    <div className="App">
      <NavBar />
      <Template />
      
        <switch>
          {/* <Route exact path="/">
              <Home />
          </Route> */}
          <Route path="/products">
            <div className="datas">
              {datas.map((data, index) => <Card image={data.image} title={data.title} desc={data.desc} key={index} />)}
            </div>
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Beforefootor/>
          <Footor/>
          
        </switch>
      
    </div>
    </Router>
  );
}

export default App;
