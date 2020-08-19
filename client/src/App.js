import React from "react";
import "./App.css";
import Nav from "./components/Nav/Nav";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./Pages/Catalog/Home";
import Cart from "./Pages/Cart/Cart";
import Login from "./Pages/Login/Login";
// import NavBar from "./components/Pages/Login/authenticate";
import QuoteSpec from "./Pages/Quote/QuoteSpec";
import newUser from "./Pages/Login/NewUser";
import Art from "./Pages/Art/Art";


function App() {
  return (
     <BrowserRouter>
      <div>

        <Nav />

        
      <h1> This site is undergoing changes.</h1>
        {/* <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/shopart" component={Art} />
        <Route exact path="/signUp" component={newUser} />
        <Route path="/quoteSpec/:sku" component={QuoteSpec} />
        <Route path="/list/:id" component={Cart} /> */}
      </div>

    </BrowserRouter> 

  );
}

export default App;