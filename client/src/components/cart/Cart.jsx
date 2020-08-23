import React, { useState, useEffect, useRef } from 'react';
import { connect } from "react-redux";
import { getAllCart } from "../../actions";
  function Cart({products, getAllCart, getcart}) {
      
    const [count, setCount] = useState(1);
    const [subtotal, setSubtotal] = useState(0)     

     React.useEffect(() => {
        var idUser = 6;
        getAllCart(idUser);
        
      }, [])
           
     var arr = [];
     
     if(getcart[0]){
        getcart.forEach(element => {
            arr.push(element.product_id)
            
        });
        console.log(getcart)
     }    

    const productosConSubtotales = useRef([])

    if (arr.length && !productosConSubtotales.current.length) {        
        products.forEach(e => {
            if (arr.includes(e.id)) {
            productosConSubtotales.current.push(e)
            }
        })
    }
          
    
    function sum(id, price){

        var cantidad =  document.getElementById(id).value;          

        var resultado = cantidad * price;

        for (let i = 0; i < productosConSubtotales.current.length; i++) {                    
            if (productosConSubtotales.current[i].id == id) {
                productosConSubtotales.current[i].subtotal = resultado
            }
        }        
        var subtotal_carrito = 0;
        productosConSubtotales.current.forEach(el => {
            if (el.subtotal) {
                subtotal_carrito += el.subtotal;                
            }
        })

        document.getElementById("subtotal").innerHTML = subtotal_carrito;

    }          

        
     return (
         <div className="container">
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

                                                 <p id="subtotal">
                                                       
                                                 </p>

                                                 <p>Free</p>
                                                 <p>25</p>
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
                                                 <h3><strong>$ 325</strong></h3>
                                             </div>
                                         </p>
                                     </th>
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
      
  
    }
  }

  const mapStateToProps = state => {
    return {
      products: state.all_products,
      getcart: state.getcart,
     
    }
  }




export default connect(mapStateToProps, mapDispatchToProps)(Cart)
