import React from 'react';

//mport { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom';

import logo from './logo.svg';

import './App.css';
import NavBar from "./components/NavBar"
import Product from "./components/Products/Product"
import Catalogo from "./components/Products/Catalogo"
import FormProduct from "./components/formularios/FormProduct"
 


function handleSubmit(e) {
    e.preventDefault()
};

function App() {

     const producto = {
         id: 1,
         title: 'Notebook HP ',
         precio: 3500,
         cantidad: 10,      
         descr: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur, vitae, explicabo? Incidunt facere, natus soluta dolores iusto! Molestiae expedita veritatis nesciunt doloremque sint asperiores fuga voluptas, distinctio, aperiam, ratione dolore.'
     }

     

    return (
        <div className="App jumbotron">             
              <Route path="/" render={() => <NavBar logo={logo}  handleSubmit={handleSubmit}/> } />                          
              <Route path="/product" render={() => <Product p = {producto}/> } /> 
              <Route exact path="/" render={() => <Catalogo p = {producto}/> } />
              <Route exact path="/formProduct" render={() => <FormProduct/> } />
        </div>
        
    );
}
// Route product es la ruta a un solo producto, 
export default App;
