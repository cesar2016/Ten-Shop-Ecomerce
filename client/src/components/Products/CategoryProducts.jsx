import React from 'react';
import TarjetCatalogue from './TarjetCatalogue.jsx';


export default function Cards({products}) { 
    if(products){
      return (
        <div className='container'>           
          {products.map(c => <TarjetCatalogue
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
        <div className="alert alert-danger">Sin Productos</div>
      )
    }
  }
  