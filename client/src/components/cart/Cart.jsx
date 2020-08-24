import React, { useState, useEffect, useRef } from 'react';
import { connect } from "react-redux";
import { getAllCart } from "../../actions";
  function Cart({products, getAllCart, getcart}) {
      
    const [input, setInput] = useState({});      
    

  const handleInputChange = function(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value
    });

    console.log('INTPUTTTT', e.target.value)

  }

     React.useEffect(() => {
        var idUser = 6;
        getAllCart(idUser);
      }, [])
      
     console.log("asda", getcart)
     var arr = [];
     
     if(getcart[0]){
        getcart.forEach(element => {
            arr.push(element.product_id)
            
        });
        console.log(getcart)
     }

     var subTotal = [];
function sum(ida, pr, idP){

    //var valor = document.getElementsByName("int").value;
    var valor =  document.getElementById(ida).value;  
   console.log('MULTIPLICA ',valor * pr);

   var res = valor * pr;

var intput = document.getElementById(idP).innerHTML = res
var add = subTotal.push(res)
console.log('EL PUSHHHHHHH', subTotal)

const suma = subTotal.reduce(function(a, b){return a + b})

console.log('LA SUMAAAA',suma)





} 
 
var id = 0 // Define los ID de los intput number
var idR = 0 // Define los ID de los intput de resultado

      
      
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
                                   getcart && products.map(e => {

                                    
                                    {  //Incremento de los ID de los inputs
                                        var ida =  id++
                                        var idP =  id++
                                    }
                                       
                                    
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
                                                
                                           <h3><strong  id={idP} onChange={handleInputChange} >${e.price}</strong>
                                           
                                           </h3>
                                            </td>
                                            <td width={'20%'}>                                            
                                                <div class="col-auto">
                                                    <label class="sr-only" for="inlineFormInput">{e.name}</label>
                                                    
                                                    
                                                     
                                                    <input type="number" id={ida} onClick={()=>sum(ida, e.price, idP)} class="form-control form-group mb-2 mt-5" placeholder="Amount" />
                                                    
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

                                                 <p>
                                                    { }
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
                                 <tr>
                                     <th><button className="btn btn-danger">Cancel</button></th>
                                 
                                     <th><button className="btn btn-success">Checkout</button></th>
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
