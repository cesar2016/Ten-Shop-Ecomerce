import React from 'react';
import TarjetCatalogue from './TarjetCatalogue.jsx';


export default function Cards({products}) {
  console.log("CategoryProducts----", products)
    if(products){
      return (
        <div classNameName='container'>
           <section className="gallery-block gallery-front">
                <div className="container">
                    <div className="row">
          {products.map(c => <TarjetCatalogue
              name={c.name}
              description={c.description}
              price={c.price}
              stock={c.stock}
              image={c.image}

            /> )}
                  </div>
                </div>
            </section>



        </div>
      );
    } else {
      return(
        <div>Sin Productos</div>
      )
    }
  }
