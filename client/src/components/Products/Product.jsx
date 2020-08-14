import React from 'react';

 
export default function Product({p,name, description, price, stock}) { 
console.log('/Product.jsx-------- p', p,name)
    return (         
       
        <div className="container">      

                <div className="site-section">
                <div className="container">
                    <div className="row">
                    <div className="col-md-6">
                        <img src="https://www.casanissei.com/media/catalog/product/cache/16a9529cefd63504739dab4fc3414065/n/b/nb_hp_15-da0073wm_i7-8550u_plata_-_1.jpg" alt="Image" className="img-fluid" height="479" width="340"/>
                    </div>
                    <div className="col-md-6">
                        <h2 className="text-black">{name}</h2>
                        <p>{description}</p>
                        <p className="mb-4">{description}</p>
                        <ul className="alert alert-info">
                             <small><strong>Cantidad disponible:{stock}</strong></small>
                        </ul>
                        <h1 class="text-danger">$ <strong >{price}</strong></h1>
                         
                        <p><a href="#" className="buy-now btn btn-sm btn-primary">Agregar al carrito <span className="fas fa-box"></span></a></p>

                    </div>
                    </div>
                </div>
                </div>
 


        </div>
    );
};
