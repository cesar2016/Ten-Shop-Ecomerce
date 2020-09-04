import React, {useEffect} from 'react';
import { connect } from "react-redux";
import "./TarjetCatalogue.css"
import { NavLink } from 'react-router-dom'
import Swal from 'sweetalert2';
import {addCart, lsset, getReviews} from "../../actions";
import Rater from "react-rater"
var ls = require('local-storage');


 function Catalogo({price, name, stock, id, image, description,addCart, onlineUser, lsset, reviews,getReviews}) {
 	useEffect(()=> {
 	 getReviews(id)
 	},[])
 	console.log("producto: ",name, "id: ", id, "reviews: ", reviews )
 	function promedy(acum, length){
			var promedy = acum / length
			if (length === 0){
				return 0
			}
			promedy.toFixed(2)
 		  console.log("PRoemdios", promedy)
			return promedy
		}
 	var acum = 0;
    for ( let i = 0; i < reviews.length; i++) {
      acum = acum + reviews[i].rating;
    }
	function addhome(data){
		console.log(data.target.value);
		Swal.fire({
			title: data.target.value,
			text: "You want to add it to the cart?",
			icon: 'question',
			showCancelButton: true,
			confirmButtonColor: 'orange',
			cancelButtonColor: 'gray',
			confirmButtonText: 'Yes, Add To Cart!',
			reverseButtons: 'ture',
		  }).then((result) => {
			if (result.value) {
				if(typeof onlineUser == "object"){
				addCart(id, onlineUser.id);
			}else{
				ls.set('idProducts', [...ls.get('idProducts'),id]);
				lsset();
			}
			
			  Swal.fire(
				'ADDED PRODUCT!',
				'The product was added to your cart',
				'success'
			  )
			}
		  })
		
	  }
	
	return (

		<div className="content">


						<div className="col-lg-3 col-md-3 col-sm-3 col-xs-12" >
							<div class="product-image-wrapper">
							<NavLink to ={`/product/${id}`} > 
								<div class="single-products">
										<div class="productinfo text-center">
											<img className="ddd" src={image}/>
											<h2>{name}</h2>
											<p>$ {price}</p>
											
										</div>
										<div style ={{"display":"flex","justifyContent": "center"}}> 
					  		<Rater style={{'react-rater-active': 'blue'}} rating={promedy(acum,reviews.length)} interactive={false}/>
					  	</div>
										<div class="product-overlay">
											<div class="overlay-content">
												<h2>{description}</h2>
												<a href="#" class="btn btn-default add-to-cart"><i class="fa fa-shopping-cart"></i>Click for more detail</a>
											</div>
										</div>
								</div>
					  	</NavLink>
					  	
								<div class=" choose text-center">
								<button type="button" className="btn btn-secondary addhome" onClick={(e) => addhome(e)} id="op1" value={name}>
								<i class="fa fa-shopping-cart" style={{marginRight:'10px'}}></i>
								Add To Cart
								</button>
							  {/*   <a href="#" class="btn btn-default"><i class="fa fa-shopping-cart"></i>Add to cart</a> */}
								</div>
							</div>
						</div>     
										

		</div>
	);
};

const mapDispatchToProps = dispatch => {
	return {
		addCart: (diProduc, idUser) => dispatch(addCart(diProduc, idUser)),
		lsset: () => dispatch(lsset()),
		getReviews: (id) => dispatch(getReviews(id))
	}
  }

  const mapStateToProps = state => {
	return {
	  onlineUser : state.onlineUser,  
		reviews: state.reviews
	}
  }




export default connect(mapStateToProps, mapDispatchToProps)(Catalogo)