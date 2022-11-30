import React from "react";
import './App.css';
import Header from "./containers/Header/Header";
import Footer from "./containers/Footer/Footer";
import { BrowserRouter as Router } from "react-router-dom";
import { ItemsContext, items } from "./containers/ItemsContext/ItemContext";
import { Provider } from "react-redux";
import { store } from "./redux/store";

function App() {
  return(
    <ItemsContext.Provider value={{items}}>
      <Provider store ={store}>
        <Router>
          <div className="App">
            <Header/>
            <Footer/>
          </div>
        </Router>
      </Provider>
    </ItemsContext.Provider>
  );
}

export default App;
