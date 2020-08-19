import React from 'react';
import "./TarjetCatalogue.css"
import { NavLink } from 'react-router-dom'

export default function Catalogo({price, name, stock, id, image, description}) {
    
    return (

        <div className="content">


                    <NavLink to ={`/product/${id}`} > 
                                    
                        <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12 alert alert" style={{height:"600px"}}> 
                            <div className="vacation-offer-details">
                                <button type="button" className="btn btn-default">{name}</button>
                            </div>

                                <h1 className="footer-details text-danger">$ {price}</h1>

                            <strong>Stock {stock}</strong>
                            <div className="gallery-image" >
                                <img className="img-responsive asd"  src={image}/>
                                <div className="overlay" >                                   
                                    <p><a className="text-warning">{description}</a></p>
                                </div>
                            </div>
                        </div>      
                                        
                      </NavLink>











        </div>
    );
};
