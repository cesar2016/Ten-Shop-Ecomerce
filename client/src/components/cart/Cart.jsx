import React, { useState, useEffect, useRef } from 'react';
import { connect } from "react-redux";
import { getAllCart,completeCart, updateCart} from "../../actions";

import Swal from 'sweetalert2'
  function Cart({products, getAllCart, getcart, onlineUser, updateCart, completeCart, cart}) {
        

  React.useEffect(() => {
    if(typeof onlineUser === "object"){  
    var idUser = onlineUser.id;
    getAllCart(idUser);
   }

  }, [cart])
           
  var arr = [];
     
  if (getcart[0]) {
    getcart.forEach(element => {
      arr.push(element.product_id)

    });
    console.log(getcart)
  }

  const productosConSubtotales = useRef([])

  if (arr.length && productosConSubtotales.current.length !== getcart.length) {
    products.forEach(e => {
      if (arr.includes(e.id)) {
        productosConSubtotales.current.push(e)
      }
    })
  }
  
  const shipping = 400;

  const taxes = useRef(0)

  const total = useRef(0)

  function sum(id, price) {

    var cantidad = document.getElementById(id).value;

    var resultado = cantidad * price;

    productosConSubtotales.current.forEach(el => {
      if (el.id == id) {
        el.subtotal = resultado;
        el.cantidad = el.subtotal/el.price
      };
    });


    var subtotal_carrito = 0;
    productosConSubtotales.current.forEach(el => {
      if (el.subtotal) {
        subtotal_carrito += el.subtotal;
      }
    })

    console.log("asdasdasds",productosConSubtotales.current)

    taxes.current = subtotal_carrito * 0.21;

    total.current = taxes.current + subtotal_carrito + shipping;

    document.getElementById("subtotal").innerHTML = "$"+subtotal_carrito;

    document.getElementById("taxes").innerHTML = "$"+taxes.current;

    document.getElementById("total").innerHTML = "$"+total.current;
      
  };
  function alertt(){  
    Swal.fire({
        title: 'Submit your Address Please',
        input: 'text',
        inputAttributes: {
          autocapitalize: 'off'
        },
        showCancelButton: true,
        confirmButtonText: 'Confirm',
        showLoaderOnConfirm: true,
        allowOutsideClick: () => !Swal.isLoading()
      }).then((result) => {
        if (result.value) {
            if(result.isConfirmed){
               
                updateCart(onlineUser.id, productosConSubtotales.current)
                completeCart(onlineUser.id, result.value);
                
                Swal.fire({
                  title: `Order completed`,
                  icon: 'success'
                })
            }
        }
      })
 }

        
     return (
         <div className="container d-flex justify-content-center">
 <section class="blog-block">
     <div class="container">
         <div class="row offspace">
             <div class="view-set-block">
                 <div class="col-md-8 col-sm-8 col-xs-12">
                     <div class="event-blog-image">
                         <table class="table">
                             <thead>
                             <tr align={'center'}>
                                 
                             <h2>Shopping Cart <i className={"fa fa-shopping-cart"}></i></h2>
                             </tr>
                             </thead>
                             <tbody>
                             
                                 { 
                                   getcart && products.map((e, i) => {
                                                                
                                       
                                    
                                       if(arr.includes(e.id)){
                                           return(
                                            <tr>
                                            <th width={'30%'}>
                                                <div class="text-center">
                                                    <img width={'150'} src={e.image} class="rounded" alt="..." />
                                                </div>
                                            </th>
                                            <td width={'50%'} >
                                                <p>
                                           <h4><a>{e.name}</a></h4>
                                                </p>
                                                <p>
                                                    <div class="event-blog-details">
                                                        <p>{e.description}
                                                </p>
                                                    </div>
                                                </p>
                                                
                                           <h3><strong  id={i+"strong"} >${e.price}</strong></h3>
                                            </td>
                                            <td width={'20%'}>                                            
                                                <div class="col-auto">
                                                    <label class="sr-only" for="inlineFormInput">{e.name}</label>
                                                    
                                                    <label>count</label>
                                                    
                                                     
                                                    <input min="1" type="number" id={e.id} onClick={()=>sum(e.id, e.price)} class="form-control mb-2 mt-5" placeholder="Amount" />
                                                </div>
                                            </td>
                                        </tr>
                                           )
                                       } 

                                       {  
                                         
                                     }

                                   })  
                                     
                                 }
                                   
                                 
                             </tbody>
                         </table>
                     </div>
                 </div>
                 <div class="col-md-4 col-sm-4 col-xs-12 side-in-image">
                     <div class="event-blog-details">
                         <table class="table">
                             <thead>
                                 <tr>
                                     <h2>Sumary <i className={"fa fa-calculator"}></i></h2>
                                 </tr>
                             </thead>
                             <tbody>
                                 <tr>
                                     <th>
                                         <p>
                                             <div class="event-blog-details">
                                                 <p>SubTotal</p>
                                                 <p>Shipping</p>
                                                 <p>Taxes</p>
                                             </div>
                                         </p>
                                     </th>
                                     <th>
                                         <p>
                                             <div class="event-blog-details">

                                                <p id="subtotal">0</p>  
                                                <p>$400</p>
                                                <p id="taxes">0</p>
                                             </div>
                                         </p>
                                     </th>
                                 </tr>
                                 <tr>
                                     <th>
                                         <p>
                                             <div class="event-blog-details">
                                                 <h3>Total</h3>
                                             </div>
                                         </p>
                                     </th>
                                     <th>
                                         <p>
                                             <div class="event-blog-details">
                                                 <h3><strong id="total">$ 400</strong></h3>
                                             </div>
                                         </p>
                                     </th>
                                 </tr>
                                 <tr>
                                     <th><button className="btn btn-danger btn-lg">Cancel</button></th>
                                 
                                     <th><button className="btn btn-default active btn-lg" onClick={() => alertt()}>Next </button></th>
                                 </tr>
                             </tbody>
                         </table>
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
        getAllCart: (idUser) => dispatch(getAllCart(idUser)),
        completeCart: (idUser, body) => dispatch(completeCart(idUser, body)),
        updateCart: (idUser, body) => dispatch(updateCart(idUser, body)),
  
    }
  }

  const mapStateToProps = state => {
    return {
      products: state.all_products,
      getcart: state.getcart,
      onlineUser : state.onlineUser,
      cart: state.cart
     
    }
  }




export default connect(mapStateToProps, mapDispatchToProps)(Cart)
