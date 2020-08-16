import React from 'react';
import TarjetCatalogue from './TarjetCatalogue.jsx';


export default function Cards({objetos}) {
    console.log(objetos)
    //console.log('/products.jsx -------',products,'eeeeeentrando array 0 ->');
    //console.log('aaaaaaaaa', products[0].name);
    if(objetos){
      return (
        <div className='container' style={{marginTop: "40px"}}>
          {objetos.map(c => <TarjetCatalogue
              id={c.id}
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
