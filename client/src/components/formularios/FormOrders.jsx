import React, { useState, useRef, useEffect } from 'react';
import "./FormOrders.css";
import { connect } from "react-redux";
import { getOrders, updateProduct} from "../../actions";
import Page404 from "../Page404";


function FormProduct({ orders, getOrders, onlineUser}) {
 
 
      function getord(select){
        let status = select.target.value;    
        for (let i = 1; i < 5; i++) {
          var boton = document.getElementById("op"+i);
          boton.className = 'btn btn-danger btn-lg';
        }
        select.target.className = 'btn btn-success btn-lg';
        getOrders(status)
    
      }
  
            
  if( onlineUser.type == 1){
      return (
  
          <div className="container">
  
  
          <section class="contact-block"></section>
              <section class="contact-block jumbotron">
                  <div class="container">

  
                      <div class="col-md-12 contact-form alert alert-dark" style={{paddingBottom:"25px"}}>
                          <h3>Management <span>Orders</span></h3>
                         <form id={'formulario'} style={{display:''}} >
  
                              <button type="button" className="btn btn-danger btn-lg" onClick={(e) => getord(e)} id="op1" value="allorders">ALL ORDERS</button>
                              &nbsp; 
                              <button type="button" class="btn btn-danger btn-lg" onClick={(e) => getord(e)} id="op2" value="processing">PROCESSING ORDERS</button>
                              &nbsp; 
                              <button type="button" class="btn btn-danger btn-lg" onClick={(e) => getord(e)} id="op3" value="cancelled">CANCELLED ORDERS</button>
                              &nbsp; 
                              <button type="button" class="btn btn-danger btn-lg" onClick={(e) => getord(e)} id="op4" value="complete">COMPLETE ORDERS</button>
                              &nbsp;                                                 
                              
                          </form>
                          
                      </div>
                      {orders.length !== 0 && <div class="col-md-12 contact-form alert alert-dark">
                          <h3>Orders in <span>List</span></h3>
                          <table class="table table-hover">
                               <thead>
                                  <tr className="table-danger table-primary">
                                      <th scope="col">ID</th>
                                      <th scope="col">OWNER</th>
                                      <th scope="col">STATUS</th>
                                      <th scope="col">TOTAL PRICE</th>
  
                                  </tr>
                               </thead>
  
                              <tbody >
                             {  orders.map((p, i) => {            

                    return ( <tr>
                      <th scope="row"> {p.id} </th>
                      <td> <span className="palabras"> {p.user.firstname.toUpperCase()} {p.user.surname.toUpperCase()}</span> </td>
                      <td>
                      <span className="palabras">  {p.status.toUpperCase()}</span>
                      </td>
                    <td>  <span className="palabras"> $ {p.total_price}</span></td>
            </tr>)
                             })
                            }
                              </tbody>
  
                          </table>
                      </div>
                    }
  
                  </div>
                  
              </section>
  
          </div>
      );
    }else{
      return (
        <div>
        <Page404 />
        </div>
      )
     }
  };
  
  const mapDispatchToProps = dispatch => {
    return {
      getOrders: (status) => dispatch(getOrders(status)),
    }
  }
  
  const mapStateToProps = state => {
    return {
    
      orders: state.getorders,  
      onlineUser: state.onlineUser
   
    }
  }
  
  
  export default connect(mapStateToProps, mapDispatchToProps)(FormProduct)