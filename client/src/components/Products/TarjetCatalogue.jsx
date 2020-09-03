import React from 'react';
import "./TarjetCatalogue.css"
import { NavLink } from 'react-router-dom'

export default function Catalogo({price, name, stock, id, image, description}) {
    
    return (

        <div className="content">


                    <NavLink to ={`/product/${id}`} > 
                        <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12" >
							<div class="product-image-wrapper">
								<div class="single-products">
										<div class="productinfo text-center">
											<img src={image}/>
											<h2>{name}</h2>
                                            <p>$ {price}</p>
											
										</div>
										<div class="product-overlay">
											<div class="overlay-content">
												<h2>{description}</h2>
												<a href="#" class="btn btn-default add-to-cart"><i class="fa fa-shopping-cart"></i>Click for more detail</a>
											</div>
										</div>
								</div>
								<div class="choose text-center">
                                <a href="#" class="btn btn-default"><i class="fa fa-shopping-cart"></i>Add to cart</a>
								</div>
							</div>
						</div>     
                                        
                      </NavLink>

        </div>
    );
};
