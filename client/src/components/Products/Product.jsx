import React, { useState, useEffect } from 'react';
import { connect } from "react-redux";
import { addCart } from "../../actions";
import { Route, NavLink } from 'react-router-dom';
import Swal from 'sweetalert2'
import Cart from '../cart/Cart';
import "./Product.css";
import Rater from 'react-rater' // PARA INSTALAR --> npm install --save react-rater
import 'react-rater/lib/react-rater.css'


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


    function onRate(rating) {
      console.log("EL RATING",rating)
    };

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
            <section>
              <div>
                <h3>Product reviews</h3>              
              </div>
              <div className="puntaje">
                <h1 id="numeroPuntaje">4.0</h1>
                <Rater total={5} rating={3.5} style={{fontSize:"60px"}} onRate={({rating}) => onRate(rating)} />
              </div>
            </section>

            <div className="container mt-5 mb-5" >
    <div className="d-flex justify-content-center row">
        <div className="d-flex flex-column col-md-8">
            <div className="d-flex flex-row align-items-center text-left comment-top p-2 bg-white border-bottom px-4">                
            </div>
            <div className="coment-bottom bg-white p-2 px-4">
                <div className="d-flex flex-row add-comment-section mt-4 mb-4"><input type="text" class="form-control mr-3" placeholder="Add comment" style={{height: "40px", fontSize:"20px"}}/><button class="btn btn-primary btn-lg" type="button">Comment</button></div>
                <div className="collapsable-comment">
                    <div className="d-flex flex-row justify-content-between align-items-center action-collapse p-2" data-toggle="collapse" aria-expanded="false" aria-controls="collapse-1" href="#collapse-1"><span>Comments</span><i class="fa fa-chevron-down servicedrop"></i></div>
                    <div id="collapse-1" className="collapse">
                        <div className="commented-section mt-2">
                            <div className="d-flex flex-row align-items-center commented-user">
                                <h5 className="mr-2">Guillermo Ambroggio</h5><span class="dot mb-1"></span><span class="mb-1 ml-2">4 hours ago</span>
                            </div>
                            <div className="comment-text-sm"><span style={{fontSize:"15px"}}>Hacen envios al Chaco?</span></div>
                            <div className="reply-section"></div>                          
                        </div>
                        <div className="commented-section mt-2">
                            <div className="d-flex flex-row align-items-center commented-user">
                                <h5 className="mr-2">Cesar Sánchez</h5><span class="dot mb-1"></span><span class="mb-1 ml-2">5 hours ago</span>
                            </div>
                            <div className="comment-text-sm"><span style={{fontSize:"15px"}}>Muy malo el producto, para usarlo tengo que prenderlo 2hs antes asi calienta un poco. En épocas de invierno hasta 4hs antes</span></div>
                            <div className="reply-section">                                
                            </div>
                        </div>
                        <div className="commented-section mt-2">
                            <div className="d-flex flex-row align-items-center commented-user">
                                <h5 className="mr-2">Makhaya andrew</h5><span class="dot mb-1"></span><span class="mb-1 ml-2">10 hours ago</span>
                            </div>
                            <div className="comment-text-sm"><span style={{fontSize:"15px"}}>Nunc sed id semper risus in hendrerit gravida rutrum. Non odio euismod lacinia at quis risus sed. Commodo ullamcorper a lacus vestibulum sed arcu non odio euismod. Enim facilisis gravida neque convallis a. In mollis nunc sed id. Adipiscing elit pellentesque habitant morbi tristique senectus et netus. Ultrices mi tempus imperdiet nulla malesuada pellentesque.</span></div>
                            <div className="reply-section">                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>








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