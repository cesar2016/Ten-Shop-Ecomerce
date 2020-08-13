import React from 'react';

 
export default function Product({p}) { 

    return (         
       
        <div className="container">      

                <div className="site-section">
                <div className="container">
                    <div className="row">
                    <div className="col-md-6">
                        <img src={p.image} alt="Image" className="img-fluid" height="479" width="340"/>
                    </div>
                    <div className="col-md-6">
                        <h2 className="text-black">{p.title}</h2>
                        <p>{p.descr}</p>
                        <p className="mb-4">{p.descr}</p>
                        <ul className="alert alert-info">
                             <small><strong>Cantidad disponible:{p.cantidad}</strong></small>
                        </ul>
                        <h1 class="text-danger">$ <strong >{p.precio}</strong></h1>
                         
                        <p><a href="#" className="buy-now btn btn-sm btn-primary">Agregar al carrito <span className="fas fa-box"></span></a></p>

                    </div>
                    </div>
                </div>
                </div>
 


        </div>
    );
};
