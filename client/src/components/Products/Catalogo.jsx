import React from 'react';
import "./Catalogo.css"


export default function Catalogo({p}) {

    return (

        <div className="content">


                    <div className="row">
                    <div className="col-lg-4 mb-4 mb-lg-0 border border-primary rounded" data-aos="fade" data-aos-delay="">
                        <a className="block-2-item" href="#">
                        <figure className="image">
                            <img src={p.image} alt="" className="img-fluid"/>
                        </figure>
                        <span>
                            <strong className="alert alert-info text-danger">$
                                <label> {p.price}</label>
                            </strong>
                        </span>
                        <div className="panel-footer">
                            <span className="text-success alert alert">Stock {p.stock}</span>
                            <h3><strong>{p.title}</strong></h3>
                        </div>
                        </a>
                    </div>
                    </div>





        </div>
    );
};
