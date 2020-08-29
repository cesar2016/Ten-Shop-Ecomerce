import React from 'react';
import Product from './Product.jsx';


export default function Cards({products}) {
    if(products){
      return (
        <div>
            
          {products.map(c => <Product
              name={c.name}
              description={c.description}
              price={c.price}
              stock={c.stock}
              image={c.image}
              id = {c.id}
            /> )}
               
        </div>
      );
    } else {
      return(
        <div>No found products</div>
      )
    }
  }
