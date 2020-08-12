import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom';
import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from "./components/NavBar"
import Product from "./components/Products/Product"
 


function handleSubmit(e) {
    e.preventDefault()
};

function App() {

     const producto = {
         title: 'Notebook HP ',
         precio: 3500,
         Descr: 'sadsadasdasdas DASS '
     }


    return (
        <div className="App jumbotron">
            <NavBar handleSubmit={handleSubmit}/>

            <Product p = {producto}/>

            <Route path="/" component={NavBar} />
            <Route path="/Product" component={Product} />
            <Route exact path='/catalogue' component={Catalog} />
            <Route exact path="/catalog/:id" component={ProductDetails} />
            
        </div>
    );
}

export default App;
