import React, { useState, useEffect } from 'react';
import { connect } from "react-redux";
import { addCart } from "../../actions";
import { Route, NavLink } from 'react-router-dom';
import Swal from 'sweetalert2'
import Cart from '../cart/Cart';

function Product({ addCart, id, products, searchProducts, onlineUser}) {
    if(typeof onlineUser === "object"){
    var idUser = onlineUser.id;
    }
   console.log(onlineUser);
    var todosLosProductos = products.concat(searchProducts);
    var resultado = todosLosProductos.find((el) => {
      if (el.id == id) {
        return el
      }
    })



     function exitoAdd(){

        addCart(resultado.id, idUser);

        Swal.fire({
            icon: 'success',
            title: 'Your cart has been update!',
            showConfirmButton: false,
            timer: 1500
          })
     }

     
     function soldout(){
        Swal.fire({
            icon: 'error',
            title: 'Oops... Sorry',
            text: 'Sold out',
          })
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
                                    {resultado.stock === 0 && <div> <button type="button" onClick={() => soldout()} className="book-now-btn btn-danger"> Sold Out  <i className="fa fa-cart-arrow-down fa-lg" aria-hidden="true"></i></button></div>}
                                    {resultado.stock !== 0 &&  typeof onlineUser !== "object" && <div> <NavLink to="/signin"><button type="button" className="book-now-btn btn-danger"> Sign In To Add To Cart  <i className="fa fa-cart-arrow-down fa-lg" aria-hidden="true"></i></button></NavLink> </div>}    
                                    {resultado.stock !== 0 &&  typeof onlineUser === "object" && <div> <button type="button" onClick={() => exitoAdd()} className="book-now-btn btn-success"> Add To Cart  <i className="fa fa-cart-arrow-down fa-lg" aria-hidden="true"></i></button> </div>}
                                                                               
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
      onlineUser : state.onlineUser
    }
  }




export default connect(mapStateToProps, mapDispatchToProps)(Product)