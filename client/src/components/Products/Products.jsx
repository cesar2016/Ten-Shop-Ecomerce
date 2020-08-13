import React from 'react';
import Product from './Product';
 
export default function Products({p}) { 

    return (         
       
        <div className="container">
            {p && p.map(product => {
                return (<Product p={product}/>
            )})}      
        </div>
    );
};
