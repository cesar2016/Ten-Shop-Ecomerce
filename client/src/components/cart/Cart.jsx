import React, { useState, useEffect, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from "react-redux";
import { getAllCart,completeCart, updateCart, cancellCart, priceOrder, getAllProducts, vaciarls} from "../../actions";
import Swal from 'sweetalert2';
import './Cart.css'
var ls = require('local-storage');

  function Cart({products, getAllCart, getcart, onlineUser, updateCart, completeCart, cart, cancellCart, priceOrder,getAllProducts, vaciarls}) {
    const history = useHistory();    

  React.useEffect(() => {
    if(typeof onlineUser === "object"){  
    var idUser = onlineUser.id;
    getAllCart(idUser);
  }
  getAllProducts()

  }, [])
         

  var arr = [];
  if(ls.get('idProducts').length){
    ls.get('idProducts').forEach(function(ele){
       return arr.push(parseInt(ele))
    })
   console.log("ARRINVITADO", arr, ls.get('idProducts'));
  }
  //console.log(arr);
 // console.log("PRODUICTSSSS",products)
  if (getcart[0]) {
    getcart.forEach(element => {
      arr.push(element.product_id)

    });
    //console.log(getcart)
  }

  const productosConSubtotales = useRef([])

  if (arr.length && productosConSubtotales.current.length !== arr.length) {
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
    var subtotal_carrito = 0;

    var cantidad = document.getElementById(id).value;

    var resultado = cantidad * price;

    productosConSubtotales.current.forEach(el => {
      if (el.id == id) {
        el.subtotal = resultado;
        el.cantidad = el.subtotal/el.price
      };
    });


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
        confirmButtonText: 'Confirm Address',
        showLoaderOnConfirm: true,        
        allowOutsideClick: () => !Swal.isLoading()
      }).then((result) => {
        if (result.value) {
            if(result.isConfirmed){            
              priceOrder(onlineUser.id,total.current);
              updateCart(onlineUser.id, productosConSubtotales.current);
              completeCart(onlineUser.id, result.value);
                vaciarls()
                arr = [];
                Swal.fire({
                  title: `Order completed. Thanks You!`,
                  icon: 'success'
                })
               
            }
        }
      });
    };

    function alerttinvited(){      
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        html: '<span class="aaaa">Please <b>login</b> or <b>register</b> to finalize your purchase. Thank you!</span>',
        footer: '<a class="asdd" href="http://localhost:3000/signin">LOG IN</a>'+ '<span class="asdp">|</span>'  +'<a class="asda" href="http://localhost:3000/signup">SIGN UP</a>'
      })
      };

    function cancell(){  
     // console.log("LINEA 106 asdasdasd",total.current)
     if(typeof onlineUser == "object"){
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
              //console.log(result);
            if (result.value) {
              cancellCart(onlineUser.id) 
              Swal.fire(
                'Deleted!',
                'Your cart has been clear.',
                'success'
              );
            }
          })
        }else{
          Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
              //console.log(result);
            if (result.value) {
              ls.set('idProducts', []);
              vaciarls()
              arr = [];
              Swal.fire(
                'Deleted!',
                'Your cart has been clear.',
                'success'
              );
              history.push('/')
            }
          });
        }
    }

        
     return (
        <section id="cart_items">
             <div class="container">
             <div class="row offspace">
             <div class="view-set-block">
                 <div class="col-md-8 col-sm-8 col-xs-12">
			<div class="breadcrumbs">
				<ol class="breadcrumb">
				  <li class="active">Shopping Cart</li>
				</ol>
			</div>
			<div class="table-responsive cart_info">
				<table class="table table-condensed">
					<thead>
						<tr class="cart_menu">
							<td class="image">Item</td>
							<td class="description"></td>
							<td class="price">Price</td>
							<td class="quantity">Quantity</td>
							<td class="total">Total</td>
							<td></td>
						</tr>
					</thead>
					<tbody>
                    { 
                        arr.length !== 0 && 
                        products.map((e, i) => {                                                               
                            if(arr.includes(e.id)){
                                return(
						<tr>
							<td class="cart_product">
								<a href=""><img width={'150'} src={e.image} alt=""/></a>
							</td>
							<td class="cart_description">
								<h4><a href="">{e.name}</a></h4>
							</td>
							<td class="cart_price">
								<p>${e.price}</p>
							</td>
							<td class="cart_quantity">
								<div class="cart_quantity_button">
									<a class="cart_quantity_up" href=""> + </a>
									<input class="cart_quantity_input" type="text" name="quantity" value="1" autocomplete="off" size="2"/>
									<a class="cart_quantity_down" href=""> - </a>
								</div>
							</td>
							<td class="cart_total">
								<p class="cart_total_price">$59</p>
							</td>
							<td class="cart_delete">
								<a class="cart_quantity_delete" href=""><i class="fa fa-times"></i></a>
							</td>
						</tr>
                        )
                        } 
                        {                                          
                        }
                        }) }
						
					</tbody>
				</table>
			</div>
		</div>
        <div class="col-sm-4">
        <div class="breadcrumbs">
				<ol class="breadcrumb">
				  <li class="active">Shopping Cart</li>
				</ol>
			</div>
					<div class="total_area">
						<ul>
							<li>Cart Sub Total <span>$59</span></li>
							<li>Eco Tax <span>$2</span></li>
							<li>Shipping Cost <span>Free</span></li>
							<li>Total <span>$61</span></li>
						</ul>
							<a class="btn btn-default update" href="">Update</a>
							<a class="btn btn-default check_out" href="">Check Out</a>
					</div>
				</div>
                </div>
                </div>
                </div>

        </section>
     );
 }; 

 const mapDispatchToProps = dispatch => {
    return {
        getAllCart: (idUser) => dispatch(getAllCart(idUser)),
        completeCart: (idUser, addres) => dispatch(completeCart(idUser, addres)),
        updateCart: (idUser, body) => dispatch(updateCart(idUser, body)),
        cancellCart: (idUser) => dispatch(cancellCart(idUser)),
        priceOrder: (id, total) => dispatch(priceOrder(id, total)),
        getAllProducts: () => dispatch(getAllProducts()),
        vaciarls: () => dispatch(vaciarls()),
        
    }
  }

  const mapStateToProps = state => {
    return {
      products: state.all_products,
      getcart: state.getcart,
      onlineUser : state.onlineUser,
      setid: state.setid,
     
    }
  }




export default connect(mapStateToProps, mapDispatchToProps)(Cart)
