import React, { useState, useEffect } from 'react';
import CategoryProducts from './components/Products/CategoryProducts.jsx';
//mport { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom';

import logo from './logo.svg';

import './App.css';
import NavBar from "./components/NavBar"
import Product from "./components/Products/Product"
import FormProduct from "./components/formularios/FormProduct"
import Catalogue from "./components/Products/Catalogue"
import About from "./components/About"
import Contact from "./components/Contact"



function App() {

    const [productos, setProductos] = useState([]);
    const [objetos, setObjetos] = useState([]);

    function funcionTraeDatos(category) {
        fetch("http://localhost:3001/categories/" + category)
        .then(r => r.json())
        .then((recurso) => {
            if(recurso){
              console.log("RECURSO", recurso)
                setProductos(recurso);
            }
            else{
                alert("Producto no encontrado");
              }
        });
    }

    useEffect(() => {
      fetch("http://localhost:3001/products")
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

    if(productos.length !== 0){  //Si la busqueda vine con algo carga solo el NavBar y CategoryProducts,
        // si no muesta todas las demas rutas
      console.log(productos)
        return (

            <div className="App jumbotron  bg-white">
                  <Route path="/" render={() => <NavBar logo={logo}  funcionTraeDatos={funcionTraeDatos}/> } />
                  <Route path="/product/:id" render={({match}) => <Product productos={objetos} id={match.params.id} productosBusqueda={productos}/> } />
                  <Route path="/" render={() => <CategoryProducts products={productos}/> } />

            </div>

        );

    }else{
    return (

        <div className="App jumbotron  bg-white">
              <Route path="/" render={() => <NavBar funcionTraeDatos={funcionTraeDatos}/> } />
              <Route exact path="/" render={() => <Catalogue objetos={objetos}/> } />
              <Route path="/product/:id" render={({match}) => <Product productos={objetos} id={match.params.id} productosBusqueda={productos}/> } />
              <Route exact path="/formProduct" render={() => <FormProduct/> } />
              <Route exact path="/about" render={() => <About/> } />

        </div>

    );
    }
}
// Route product es la ruta a un solo producto,
export default App;
