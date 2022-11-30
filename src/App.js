import React from "react";
import './App.css';
import Header from "./containers/Header/Header";
import Footer from "./containers/Footer/Footer";
import { BrowserRouter as Router } from "react-router-dom";
import { ItemsContext, items } from "./containers/ItemsContext/ItemContext";

function App() {
  return(
    <ItemsContext.Provider value={{items}}>
      <Router>
        <div className="App">
          <Header/>
          <Footer/>
        </div>
      </Router>
    </ItemsContext.Provider>
  );
}

export default App;
