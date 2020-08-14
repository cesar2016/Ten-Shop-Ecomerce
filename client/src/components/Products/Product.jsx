import React from 'react';

 
export default function Product({p,name, description, price, stock}) { 
console.log('/Product.jsx-------- p', p,name)
    return (         
       
        <div className="container">      

                {/* <div className="site-section">
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
                </div> */}

            <section class="blog-block">
                <div class="container">
                    <div class="row offspace-45">
                        <div class="view-set-block">
                            <div class="col-md-6 col-sm-6 col-xs-12">
                                <div class="event-blog-image">
                                    <img alt="image" class="img-responsive" src="https://www.casanissei.com/media/catalog/product/cache/16a9529cefd63504739dab4fc3414065/n/b/nb_hp_15-da0073wm_i7-8550u_plata_-_1.jpg"/>
                                </div>
                            </div>
                            <div class="col-md-6 col-sm-6 col-xs-12 side-in-image">
                                <div class="event-blog-details">
                                    <h4><a href="single-blog.html">{name}</a></h4>
                                    <h5><i aria-hidden="true" class="fa fa-money  fa-lg"></i> $ {price} <i aria-hidden="true" class="fa fa-check fa-lg"></i>{stock}</h5>
                                    <p>{description}Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc lorem nulla, ornare eu felis quis, efficitur posuere nulla. Aliquam ac luctus turpis, non faucibus sem. Fusce ornare turpis neque, eu commodo sapien porta sed. Nam ut ante turpis. Nam arcu odio, scelerisque a vehicula vitae, auctor sit amet lectus. </p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc lorem nulla, ornare eu felis quis, efficitur posuere nulla. Aliquam ac luctus turpis, non faucibus sem. Fusce ornard hendrerit tortor vulputate id. Vestibulum mauris nibh, luctus non maximus vitae, porttitor eget neque. Donec tristique nunc facilisis, dapibus libero ac</p>
                                    
                                    <div>
                                        <button type="button" class="book-now-btn">comprar  <i class="fa fa-cart-arrow-down fa-lg" aria-hidden="true"></i></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </section>

            
 


        </div>
    );
};
