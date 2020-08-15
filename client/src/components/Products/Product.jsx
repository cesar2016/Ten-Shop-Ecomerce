import React, { useState, useEffect } from 'react';


 
export default function Product({match}) { 

      console.log('AAAAAA', match.params.id);

      

    const [productone, setProductone] = useState([]);

    useEffect(() => {
        return fetch("http://localhost:3001/products/"+match.params.id)
         .then(r => r.json())
         .then((recurso) => {
             if(recurso){
                 let productdates = {
                     id: recurso[0].id,
                     name: recurso[0].name,
                     description: recurso[0].description,
                     price: recurso[0].price,
                     stock: recurso[0].stock
                 }
setProductone(productdates);
             }
             else{
                 alert("Producto no encontrado");
               }                       
         });
       },[]);

            

    return (         
       
        <div className="container">              

            <section className="blog-block">
                <div className="container">
                    <div className="row offspace-45">
                        <div className="view-set-block">
                            <div className="col-md-6 col-sm-6 col-xs-12">
                                <div className="event-blog-image">
                                    <img alt="image" className="img-responsive" src="https://www.casanissei.com/media/catalog/product/cache/16a9529cefd63504739dab4fc3414065/n/b/nb_hp_15-da0073wm_i7-8550u_plata_-_1.jpg"/>
                                </div>
                            </div>
                            <div className="col-md-6 col-sm-6 col-xs-12 side-in-image">
                                <div className="event-blog-details">
                                    <h4><a href="single-blog.html">{productone.name}</a></h4>
                                    <h5><i aria-hidden="true" className="fa fa-money  fa-lg"></i> $ {productone.price} <i aria-hidden="true" className="fa fa-check fa-lg"></i>{productone.stock}</h5>
                                    <p>{productone.description}Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc lorem nulla, ornare eu felis quis, efficitur posuere nulla. Aliquam ac luctus turpis, non faucibus sem. Fusce ornare turpis neque, eu commodo sapien porta sed. Nam ut ante turpis. Nam arcu odio, scelerisque a vehicula vitae, auctor sit amet lectus. </p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc lorem nulla, ornare eu felis quis, efficitur posuere nulla. Aliquam ac luctus turpis, non faucibus sem. Fusce ornard hendrerit tortor vulputate id. Vestibulum mauris nibh, luctus non maximus vitae, porttitor eget neque. Donec tristique nunc facilisis, dapibus libero ac</p>
                                    
                                    <div>
                                        <button type="button" className="book-now-btn">comprar  <i className="fa fa-cart-arrow-down fa-lg" aria-hidden="true"></i></button>
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
