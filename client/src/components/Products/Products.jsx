import React from 'react';
import Product from './Product.jsx';


export default function Cards({products}) {
    console.log('/products.jsx -------',products,'eeeeeentrando array 0 ->',products[0]);
    //console.log('aaaaaaaaa', products[0].name);
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
  