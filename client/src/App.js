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
         cantidad: 10,      
         descr: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur, vitae, explicabo? Incidunt facere, natus soluta dolores iusto! Molestiae expedita veritatis nesciunt doloremque sint asperiores fuga voluptas, distinctio, aperiam, ratione dolore.'
     }


    return (
        <div className="App jumbotron">
            <NavBar handleSubmit={handleSubmit}/>

            <Product p = {producto}/>             
            
        </div>
    );
}

export default App;
