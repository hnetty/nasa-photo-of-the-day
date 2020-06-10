import React, { useState, useEffect } from "react";
import "./App.css";
import Body from "./Components/Body.js"
import Footer from  "./Components/Footer.js"
import Header from "./Components/Header.js"
import axios from 'axios'

function App() {

  const [info, setInfo] = useState([]);

  useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
    .then(res =>{
      console.log(res.data)
      setInfo(res.data)
    })
    .catch(err =>{
      debugger
    })
  }, [])

  return (
    <div className="App">
      {
        <p> Read through the instructions in the README.md file to build your NASA app! Have fun <span role="img" aria-label='go!'>🚀</span>!</p>
      }
      <Body information={info}/>
      {/* <Header />
      
      <Footer /> */}
    </div>
  );
}

export default App;
