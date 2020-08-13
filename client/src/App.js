
import { BrowserRouter, Route } from 'react-router-dom';
import React from 'react';


import logo from './logo.svg';

import './App.css';
import NavBar from "./components/NavBar"
import Product from "./components/Products/Product"
import Catalogo from "./components/Products/Catalogo"
import Crud from "./components/crud/Crud"
 


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
             
              <Route path="/" render={() => <NavBar  handleSubmit={handleSubmit}/> } />                          
              <Route path="/product" render={() => <Product p = {producto}/> } /> 
              <Route exact path="/" render={() => <Catalogo p = {producto}/> } />
              {/* <Route exact="/crud" render={() => <Crud p = {producto}/> } /> */}

        </div>
        
    );
}
// Route es la ruta a un solo producto, 
export default App;
