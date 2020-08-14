import React from 'react';
import "./Catalogo.css"

 
export default function Catalogo({p}) { 

    return (         
       
        <div> 
            <section class="service-block">  

                    {/* <div className="row">
                    <div className="col-lg-4 mb-4 mb-lg-0 border border-primary rounded" data-aos="fade" data-aos-delay="">
                        <a className="block-2-item" href="#">
                        <figure className="image">
                            <img src="https://medias.musimundo.com/medias/sys_master/images/images/hb2/hae/10167404789790/00248325-138323-138323-01-138323-01.jpg" alt="" className="img-fluid"/>
                        </figure>
                        <span>
                            <strong className="alert alert-info text-danger">$ 
                                <label> {p.precio}</label>
                            </strong>
                        </span>
                        <div className="panel-footer">
                            <span className="text-success alert alert">Stock {p.cantidad}</span>
                            <h3><strong>{p.title}</strong></h3>
                        </div>
                        </a>
                    </div>
                    </div> */}


<section class="gallery-block gallery-front">
                <div class="container">                    
                    <div class="row">
                        <div class="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                            <div class="vacation-offer-details">
                                <button type="button" class="btn btn-default">{p.title}</button>                                
                            </div>
                            <h1> $ <strong class="active">{p.precio}</strong></h1>
                            <strong>disponibles{p.cantidad}</strong>
                            <div class="gallery-image">
                                <img class="img-responsive" src="style/images/room1.png"/>
                                <div class="overlay">
                                    <a class="info pop example-image-link img-responsive" href="images/room1.png" data-lightbox="example-1"><i class="fa fa-search" aria-hidden="true"></i></a>
                                    <p><a>{p.title}</a></p>                                    

                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </section>



            </section>   

        </div>
    );
};
