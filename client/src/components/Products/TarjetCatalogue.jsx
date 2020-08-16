import React from 'react';
import "./Catalogo.css"
import { NavLink } from 'react-router-dom'

export default function Catalogo({price, name, stock, id, image}) {
    //console.log("TarjetCatalogue", name)
    return (

        <div className="content">


                    <NavLink to ={`/product/${id}`} >
                        <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12 alert alert">
                            <div className="vacation-offer-details">
                                <button type="button" className="btn btn-default">{name}</button>
                            </div>

                                <h1 className="footer-details text-danger">$ {price}</h1>

                            <strong>Stock {stock}</strong>
                            <div className="gallery-image">
                                <img className="img-responsive" src={image}/>
                                <div className="overlay">
                                    <a className="info pop example-image-link img-responsive" href="https://www.venex.com.ar/products_images/1557757777_4zu3_hp_250_g6.jpg" data-lightbox="example-1"><i className="fa fa-search" aria-hidden="true"></i></a>
                                    <p><a className="text-warning">{name}</a></p>

                                </div>
                            </div>
                        </div>
                      </NavLink>











        </div>
    );
};
