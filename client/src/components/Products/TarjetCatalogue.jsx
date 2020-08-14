import React from 'react';
import "./Catalogo.css"

 
export default function Catalogo({price, name, stock}) { 

    return (         
       
        <div className="content">                         
            
                        <div class="col-lg-3 col-md-3 col-sm-3 col-xs-12 alert alert">
                            <div class="vacation-offer-details">
                                <button type="button" class="btn btn-default">{name}</button>                                
                            </div>
                            <h1> $ <strong class="active">{price}</strong></h1>
                            <strong>disponibles{stock}</strong>
                            <div class="gallery-image">
                                <img class="img-responsive" src="https://www.venex.com.ar/products_images/1557757777_4zu3_hp_250_g6.jpg"/>
                                <div class="overlay">
                                    <a class="info pop example-image-link img-responsive" href="images/room1.png" data-lightbox="example-1"><i class="fa fa-search" aria-hidden="true"></i></a>
                                    <p><a className="text-warning">{name}</a></p>                                    

                                </div>
                            </div>
                        </div>
                        
                     
                

             


        </div>
    );
};

