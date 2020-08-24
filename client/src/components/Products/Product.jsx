import React, { useState, useEffect } from 'react';
import { connect } from "react-redux";
import { addCart } from "../../actions";
import Swal from 'sweetalert2'



function Product({ addCart, id, products, searchProducts}) {
var idUser = 6;


   
    var todosLosProductos = products.concat(searchProducts);
    var resultado = todosLosProductos.find((el) => {
      if (el.id == id) {
        return el
      }
    })

    
     function exitoAdd(){
        
        alert('Add Cart Success')
     }

    return (

        <div className="container">

            <section className="blog-block">
                <div className="container">
                    <div className="row offspace-45">
                        <div className="view-set-block">
                            <div className="col-md-6 col-sm-6 col-xs-12">
                                <div className="event-blog-image">
                                    <img alt="image" className="img-responsive" src={resultado.image}/>
                                </div>
                            </div>
                            <div className="col-md-6 col-sm-6 col-xs-12 side-in-image">
                                <div className="event-blog-details">
                                    <h4><a href="single-blog.html">{resultado.name}</a></h4>
                                    <h5><i aria-hidden="true" className="fa fa-money  fa-lg"></i> <strong className= "text-danger">$ {resultado.price}</strong> <i aria-hidden="true" className="fa fa-check fa-lg"></i><strong className = "text-success">Stock: {resultado.stock}</strong></h5>
                                    <p>{resultado.description}CESR SANCHEZ Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc lorem nulla, ornare eu felis quis, efficitur posuere nulla. Aliquam ac luctus turpis, non faucibus sem. Fusce ornare turpis neque, eu commodo sapien porta sed. Nam ut ante turpis. Nam arcu odio, scelerisque a vehicula vitae, auctor sit amet lectus. </p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc lorem nulla, ornare eu felis quis, efficitur posuere nulla. Aliquam ac luctus turpis, non faucibus sem. Fusce ornard hendrerit tortor vulputate id. Vestibulum mauris nibh, luctus non maximus vitae, porttitor eget neque. Donec tristique nunc facilisis, dapibus libero ac</p>

                                    <div>
                                        <button 
                                        type="button" onClick={() => 
                                            addCart(resultado.id, idUser, Swal.fire({
                                            title: 'Product add to cart now!',
                                            timer: 2000,
                                            icon: 'success' 
                                        }))} className="book-now-btn">
                                            Add To Cart  <i className="fa fa-cart-arrow-down fa-lg" aria-hidden="true"></i></button>
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

const mapDispatchToProps = dispatch => {
    return {
        addCart: (diProduc, idUser) => dispatch(addCart(diProduc, idUser)),
      
  
    }
  }

  const mapStateToProps = state => {
    return {
      products: state.all_products,
      searchProducts: state.search_result,
     
    }
  }




export default connect(mapStateToProps, mapDispatchToProps)(Product)