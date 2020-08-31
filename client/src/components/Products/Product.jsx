import React, { useState, useEffect } from 'react';
import { connect } from "react-redux";
import { addCart, addReview , getReviews, getUsers, getOrders, getOrdersxproduct} from "../../actions";
import { NavLink } from 'react-router-dom';
import Swal from 'sweetalert2'
import "./Product.css";
import Rater from 'react-rater' // PARA INSTALAR --> npm install --save react-rater
import 'react-rater/lib/react-rater.css';

function Product({ addCart, id, products, searchProducts, onlineUser, reviews,addReview,getReviews, all_users,getUsers, newrev,getOrders,orders,getOrdersxproduct,ordersxproduct}) {
    const [input,setInput] = useState({});
    const [inputRating, setInputRating] = useState({});

    useEffect(()=> {
        getUsers();
				getReviews(id);
				getOrders("complete")
				getOrdersxproduct(id)
    },[newrev]);

    function handleInputChange (e) {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }
    var aux = {
        username: onlineUser.username,
        review: {
        rating: inputRating,
        comments: input.comments
    }
}
     function handleSubmit (e) {
         addReview(aux, id);
         getReviews(id);

    }
    if(typeof onlineUser === "object"){
    var idUser = onlineUser.id;
    }
    var todosLosProductos = products.concat(searchProducts);
    var resultado = todosLosProductos.find((el) => {
      if (el.id == id) {
        return el
      }
    })

    var acum = 0;
    for ( let i = 0; i < reviews.length; i++) {
      acum = acum + reviews[i].rating;
    }
		function promedy(acum, length){
			var promedy = acum / length
			if (length === 0){
				return 0
			}
			promedy.toFixed(2)
			return promedy
		}

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
			console.log(rating)
     setInputRating(rating)

		};
		var flag = false
    if (onlineUser === 0 || onlineUser === 1) {
      flag = true
    } else {
    flag = false
    }
    var flagOrders = false
     reviews && reviews.map((p) => {if (p.userId === onlineUser.id) flag = true})
        if (orders.length > 0){
          orders.map((or) => {
            if (or.userId){
              ordersxproduct.map((op) => {if(op.order_id === or.id){if(or.status === "complete"){flagOrders = true}}} )
            }
          })
        }
    if(!flagOrders){flag = true}
   
  console.log("flag", flag)
    return (
       <div className="container">

         <section className="blog-block">
          <div className="container">
        	  <div className="row offspace-45">
							<div class="col"> </div>
        	    <div className="view-set-block col-6">
                <div className="col-md-6 col-sm-6 col-xs-12">
                  <div className="event-blog-image">
                    <img alt="image" className="img-responsive" src={resultado.image}/>
                  </div>
         	    	</div>
                <div className="col-md-6 col-sm-6 col-xs-12 side-in-image">
                  <div className="event-blog-details">
                    <h4><a href="single-blog.html">{resultado.name}</a></h4>
                    <h5><i aria-hidden="true" className="fa fa-money  fa-lg"></i> <strong className= "text-danger">$ {resultado.price}</strong> <i aria-hidden="true" className="fa fa-check fa-lg"></i><strong className = "text-success">Stock: {resultado.stock}</strong></h5>
                    <p>{resultado.description} </p>
                    {resultado.stock === 0 && <div> <button type="button" onClick={() => soldout()} className="book-now-btn btn-danger"> Sold Out  <i className="fa fa-cart-arrow-down fa-lg" aria-hidden="true"></i></button></div>}
                    {resultado.stock !== 0 &&  typeof onlineUser !== "object" && <div> <NavLink to="/login"><button type="button" className="book-now-btn btn-danger"> Sign In To Add To Cart  <i className="fa fa-cart-arrow-down fa-lg" aria-hidden="true"></i></button></NavLink> </div>}
                    {resultado.stock !== 0 &&  typeof onlineUser === "object" && <div> <button type="button" onClick={() => exitoAdd()} className="book-now-btn btn-success"> Add To Cart  <i className="fa fa-cart-arrow-down fa-lg" aria-hidden="true"></i></button> </div>}
                  </div>
                </div>
              </div>
								<div class="col"></div>
            </div>
          </div>
         </section>
         <section>
          <div>
          <h3>Average:</h3>
          </div>
            <div className="puntaje">
              <Rater total={5} rating={promedy(acum, reviews.length)} interactive = {false}  																								style={{fontSize:"60px"}} onRate={({rating}) => onRate(rating)} />
	            </div>
         </section>

        <div className="container mt-5 mb-5" >
          <div className="d-flex justify-content-center row">
            <div className="d-flex flex-column col-md-8">
            <div className="d-flex flex-row align-items-center text-left comment-top p-2 bg-white border-bottom px-4">
            </div>
            <div className="coment-bottom bg-white p-2 px-4">
							{!flag? // si es false cambia el valor y renderiza
								<div style = {{height:"70px", marginBottom:"10px"}}className="d-flex flex-row add-comment-section mt-4 mb-4">
								<div style={{width:"70%"}} >
							 <input onChange={handleInputChange}  name = "comments" id="review" type="text" class="form-control mr-3" placeholder="Add comment" style={{height: "60px", fontSize:"20px"}}/>
								</div>
								<div>
								<div style={{justifyContent:"flex-end"}}>
									<Rater total= {5}  onRate={({rating}) => onRate(rating)} style={{fontSize:"30px", alignSelf:"flexStart", height:"30px"}}/>
								</div>
								<div>
							 <button onClick={()=> handleSubmit()} class="btn btn-primary btn-lg" type="button">Leave my review.</button>
								</div>
							</div>
							</div> : <div></div>
							}

                <div className="collapsable-comment">
                   <div className="d-flex flex-row justify-content-between align-items-center action-collapse p-2" data-toggle="collapse" aria-expanded="false" aria-controls="collapse-1" href="#collapse-1"><span style= {{fontSize:"20px", fontWeight:"bold"}}>Reviews: </span><i class="fa fa-chevron-down servicedrop"></i></div>
                     <div id="collapse-1" className="collapse">
                      {reviews && reviews.map (p =>
                        <div className="commented-section mt-2 row border-bottom px-6">
                         <div className="d-flex flex-row align-items-center commented-user col">
                           <h2 className="mr-2">{all_users.map(u => {if( p.userId === u.id) return ("  " + u.firstname.charAt(0).toUpperCase()+u.firstname.slice(1) + " " + u.surname.charAt(0).toUpperCase()+u.surname.slice(1))})}</h2>
                           {/* <span class="dot mb-1"></span> */}
                         </div>
                         <div className="reply-section col " style={{ textAlign:"right"}}>
                           <Rater total={5} rating= {p.rating}interactive = {false} style={{fontSize:"30px"}}  />
                         </div>
                         <div class="w-100"></div>
                         <div className="comment-text-sm col" style={{ textAlign:"left"}}><span style={{fontSize:"20px", textAlign:"left"}}>{p.comments}</span>
													</div>
                         <div className= "col" style={{marginTop:"10px", textAlign:"right"}}>
                          	<span class="mb-1 ml-2 " style= {{ textAlign:"right", fontSize:"14px"}}>{p.createdAt.slice(0,10)}</span>
                    		 </div>
												</div>
              				)}
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
        addReview: (input, idProduct) => dispatch(addReview(input, idProduct)),
        getReviews: (id) => dispatch(getReviews(id)),
				getUsers: () => dispatch(getUsers()),
				getOrders: (status) => dispatch(getOrders(status)),
				getOrdersxproduct: (idProd) => dispatch(getOrdersxproduct(idProd))
    }
  }

  const mapStateToProps = state => {
    return {
      products: state.all_products,
      searchProducts: state.search_result,
      onlineUser : state.onlineUser,
      reviews: state.reviews,
      all_users: state.all_users,
			newrev: state.newrev,
			orders: state.getorders,
			ordersxproduct: state.ordersxproduct
    }
  }




export default connect(mapStateToProps, mapDispatchToProps)(Product)