import React from 'react';
import "./Catalogo.css"

 
export default function Catalogo({price, name, stock}) { 

    return (         
       
        <div className="content">      

             
                    <div className="row">
                    <div className="col-lg-4 mb-4 mb-lg-0 border border-primary rounded" data-aos="fade" data-aos-delay="">
                        <a className="block-2-item" href="#">
                        <figure className="image">
                            <img src="https://medias.musimundo.com/medias/sys_master/images/images/hb2/hae/10167404789790/00248325-138323-138323-01-138323-01.jpg" alt="" className="img-fluid"/>
                        </figure>
                        <span>
                            <strong className="alert alert-info text-danger">$ 
                                <label> {price}</label>
                            </strong>
                        </span>
                        <div className="panel-footer">
                            <span className="text-success alert alert">Stock {stock}</span>
                            <h3><strong>{name}</strong></h3>
                        </div>
                        </a>
                    </div>
                    </div>
                

             


        </div>
    );
};

