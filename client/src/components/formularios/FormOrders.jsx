import React from 'react';
import "./FormOrders.css";
import { connect } from "react-redux";
import { getOrders} from "../../actions";
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
{orders.length !== 0 && 
<section id="cart_items">
  <div >
    <div class="col-md-9 contact-form alert alert-dark">
      <div class="table-responsive cart_info">
        <table class="table table-condensed">
          <thead>
          <tr class="cart_menu">
            <td class="price">Id</td>
            <td class="quantity">Owner</td>
            <td class="price">Status</td>
            <td class="delete">Total Price</td>
          </tr>
        </thead>
        <tbody>
        {orders.map((p, i) => {            
        return (
        <tr>
          <td class="cart_price">
            <p>{p.id}</p>
          </td>
            <td class="cart_quantity">
              <p>{p.user.firstname.toUpperCase()} {p.user.surname.toUpperCase()}</p>
          </td>
          <td class="cart_quantity">
            <p>{p.status.toUpperCase()}</p>
          </td>
          <td class="cart_quantity">
            <p>$ {p.total_price}</p>
          </td>
        </tr>
        )})}
        </tbody>
      </table>
    </div>
  </div>
</div>
</section> 
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