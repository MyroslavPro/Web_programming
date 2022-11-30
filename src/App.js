import React from "react";
import './App.css';
import Header from "./containers/Header/Header";
import Footer from "./containers/Footer/Footer";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return(
    <Router>
      <div className="App">
        <Header/>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
