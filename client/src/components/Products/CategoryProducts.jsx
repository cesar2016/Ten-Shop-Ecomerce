import React from 'react';
import TarjetCatalogue from './TarjetCatalogue.jsx';


export default function Cards({products}) {
  console.log("CategoryProducts----", products)
    if(products){
      return (
        <div className='container'>
          {products.map(c => {
            {console.log("ACAAAAA", c)}
            return <TarjetCatalogue
                id={c.id}
                name={c.name}
                description={c.description}
                price={c.price}
                stock={c.stock}
                image={c.image}

              />
          } )}

        </div>
      );
    } else {
      return(
        <div className="alert alert-danger">Sin Productos</div>
      )
    }
  }
