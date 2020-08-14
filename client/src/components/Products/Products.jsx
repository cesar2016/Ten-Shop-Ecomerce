import React from 'react';
import Product from './Product.jsx';


export default function Cards({products}) { 
    if(products){
      return (
        <div className='container'>
          {products.map(c => <Product
              name={c.name}
              description={c.description}
              price={c.price}
              stock={c.stock}
              image={c.image}          
              
            /> )}
        </div>
      );
    } else {
      return(
        <div>Sin Productos</div>
      )
    }
  }
  