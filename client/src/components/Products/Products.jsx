import React from 'react';
import Product from './Product';
import Catalogo from "./Catalogo"

export default function Products({products}) {
    console.log("QUE TIENE EL P EN PRODUCTS", products)
    return (

        <div className="container">
            {
                products && products.map(product => <Catalogo p={product}/>)
                
            }
        </div>
    );
};
