import React, {useState} from 'react';
import Products from './components/Products/Products.jsx';
//mport { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom';

import logo from './logo.svg';

import './App.css';
import NavBar from "./components/NavBar"
import Product from "./components/Products/Product"
import Catalogo from "./components/Products/Catalogo"
import FormProduct from "./components/formularios/FormProduct"





function App() {
    const [products, setProducts] = useState([]);

    function funcionTraeDatos(category) {
        //console.log("ENTRA A FUNCION TRAE DATOS")
        console.log("QUE ES CATEGORY", category)
        fetch("http://localhost:3001/categories/" + category)
        .then(r => r.json())
        .then((recurso) => {
            console.log("ESTO ES LO QUE ME TRAE",recurso)// trae un array: [{name:producto1, price:50}, {name:prod2..}, {}]
           /*  for (let i = 0; i < recurso.length; i++) {
                var producto = {                
                    name: recurso[i].name,
                    description: recurso[i].description,
                    price: recurso[i].price,
                    stock: recurso[i].stock,
                    image: recurso[i].image
                }; */
                setProducts(recurso);
                
            //}
          
        })
    }

/*      const producto = {
         id: 1,
         title: 'Notebook HP ',
         precio: 3500,
         cantidad: 10,
         descr: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur, vitae, explicabo? Incidunt facere, natus soluta dolores iusto! Molestiae expedita veritatis nesciunt doloremque sint asperiores fuga voluptas, distinctio, aperiam, ratione dolore.'
     } */



    return (
        <div className="App jumbotron">
              <Route path="/" render={() => <NavBar logo={logo}  funcionTraeDatos={funcionTraeDatos}/> } />
              <Route path="/" render={() => <Products products={products}/> } />
              <Route exact path="/catalogue" render={() => <Catalogo p = {products}/> } />
              <Route exact path="/formProduct" render={() => <FormProduct/> } />
        </div>

    );
}
// Route product es la ruta a un solo producto,
export default App;
