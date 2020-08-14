import React, { useState, useEffect } from 'react';
import Products from './components/Products/Products.jsx';
//mport { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom';

import logo from './logo.svg';

import './App.css';
import NavBar from "./components/NavBar"
import Product from "./components/Products/Product"
import FormProduct from "./components/formularios/FormProduct"
import Catalogue from "./components/Products/Catalogue"





function App() {
    const [products, setProducts] = useState([]);
    const [objetos, setObjetos] = useState([]);

    function funcionTraeDatos(category) {
        fetch("http://localhost:3001/categories/" + category)
        .then(r => r.json())
        .then((recurso) => {
            if(recurso){
                setProducts(recurso);
            }
            else{
                alert("Producto no encontrado");
              }
        });

    }

    useEffect(() => {
       return fetch("http://localhost:3001/products")
        .then(r => r.json())
        .then((recurso) => {
            if(recurso){
               setObjetos(recurso);
            }
            else{
                alert("Producto no encontrado");
              }
        });
      },[]);

      var productone = {
        name: "asdasd",
        price: 50,
        description: 'asdasdasdasdasd',
        stock: 20
    }


    return (
        <div className="App content">
              <Route path="/" render={() => <NavBar logo={logo}  funcionTraeDatos={funcionTraeDatos}/> } />
              <Route path="/" render={() => <Products products={products}/> } />
              <Route exact path="/" render={() => <Catalogue objetos={objetos}/> } />
              <Route path="/product" render={() => <Product products={productone}/> } />
              <Route exact path="/formProduct" render={() => <FormProduct/> } />
        </div>

    );
}
// Route product es la ruta a un solo producto,
export default App;
