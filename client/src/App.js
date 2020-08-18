import React, { useState, useEffect } from 'react';
import CategoryProducts from './components/Products/CategoryProducts.jsx';
//mport { Provider } from 'react-redux'
import { Route } from 'react-router-dom';

import logo from './logo.svg';

import './App.css';
import NavBar from "./components/NavBar"
import Product from "./components/Products/Product"
import FormProduct from "./components/formularios/FormProduct"
import Catalogue from "./components/Products/Catalogue"
import About from "./components/About"
import FormAddProduct from "./components/formularios/FormAddProduct"
import FormAddCategory from "./components/formularios/FormAddCategory"
import Contact from './components/Contact.jsx';




function App() {

    const [productos, setProductos] = useState([]);
    const [objetos, setObjetos] = useState([]);
    const [categories,setCategories] = useState([]);

    function funcionTraeDatos(products) {
 
        fetch("http://localhost:3001/products/searches/" + products)
        .then(r => r.json())
        .then((recurso) => {         
            if(recurso){             
                setProductos(recurso);
                
            }
           
        })
        .catch(() => alert("Categoria no encontrada >:("))
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
        fetch("http://localhost:3001/categories")
        .then(r => r.json())
        .then((recurso) => {
            if(recurso){
               setCategories(recurso);
            }
            else{
                alert("Category not found.");
              }
        });
      },[]);


      ////////////Trayendo CATEGORIES      
    useEffect(() => {
        fetch("http://localhost:3001/categories/")
        .then(r => r.json())
        .then((recursoCat) => {         
            if(recursoCat) {
                console.log("EL RECURSO", recursoCat)
                setCategories(recursoCat)
            }
        })
    }, [])



    if(productos.length !== 0){  //Si la busqueda vine con algo carga solo el NavBar y CategoryProducts,
        // si no muesta todas las demas rutas
        
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
              <Route exact path="/" render={() => <Catalogue objetos={objetos} /> } />
              <Route path="/product/:id" render={({match}) => <Product productos={objetos} id={match.params.id} productosBusqueda={productos}/> } />
              <Route exact path="/formProduct" render={() => <FormProduct products={objetos} categories={categories}/> } />
              <Route exact path="/about" render={() => <About/> } />
              <Route exact path="/contact" render={() => <Contact/> } />
              <Route exact path="/formAddProduct" render={() => <FormAddProduct products={objetos} categories={categories}/> } />
            <Route exact path= "/formCategory" render={() => <FormAddCategory category={categories}/>} />
        </div>

    );
    }
}
// Route product es la ruta a un solo producto,
export default App;
