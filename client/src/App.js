import React from 'react';

//mport { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom';

import logo from './logo.svg';

import './App.css';
import NavBar from "./components/NavBar"
import Product from "./components/Products/Product"
import Catalogo from "./components/Products/Catalogo"
import FormProduct from "./components/formularios/FormProduct"
import Products from './components/Products/Products'





function App() {
    function funcionTraeDatos(category) {
        console.log("ENTRA A FUNCION TRAE DATOS")
        console.log("QUE ES CATEGORY", category)
        fetch("http://localhost:3001/categories/" + category)
        .then(r => r.json())
        .then((recurso) => {
            console.log("ESTO ES LO QUE ME TRAE",recurso)
        })
    }

     const producto = {
         id: 1,
         title: 'Notebook HP ',
         precio: 3500,
         cantidad: 10,
         descr: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur, vitae, explicabo? Incidunt facere, natus soluta dolores iusto! Molestiae expedita veritatis nesciunt doloremque sint asperiores fuga voluptas, distinctio, aperiam, ratione dolore.'
     }

     var products;

    return (

        
       

        <div className="App jumbotron">
              <Route path="/" render={() => <NavBar logo={logo}  funcionTraeDatos={funcionTraeDatos}/> } />
              <Route path="/product" render={() => <Product p = {producto}/> } />
              {/* <Route exact path="/" render={() => <Catalogo p = {producto}/> } /> */}
              <Route exact path="/formProduct" render={() => <FormProduct/> } />
              <Route path="/" render={() => <Products  p={products}/> } />

        </div>

    );
}
// Route product es la ruta a un solo producto,
export default App;
