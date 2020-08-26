import React, { useState, useEffect } from "react"
import "./NavBar.css"
import SearchBar from "./SearchBar.jsx"
import { NavLink } from 'react-router-dom'
import { connect } from "react-redux";
import { userLogout } from "../actions/index.js"
import Swal from 'sweetalert2'


function SliderImage({onlineUser, userLogout, getcart}) {  
  
            
        
    return (
        <header className="header-content-fluid" style={{marginTop:'50px'}}>


        <div id="myCarousel1" class="carousel slide" data-ride="carousel">

                <ol className={"carousel-indicators"}>
                    <li data-target="#myCarousel1" data-slide-to="0" class="active"></li>
                    <li data-target="#myCarousel1" data-slide-to="1"></li>
                    <li data-target="#myCarousel1" data-slide-to="2"></li>
                </ol>
                
                <div class="carousel-inner">
                    <div class="item active"> <img src="style/images/slider1.png" style={{width:'100%', height:' 500px'}}  alt="First slide"/>
                        <div class="carousel-caption">
                            {/* <h1>PROMO Tablet</h1> */}
                        </div>
                    </div>
                    <div class="item"> <img src="style/images/slider2.png" style={{width:'100%', height:' 500px'}} alt="Second slide"/>
                        <div class="carousel-caption">
                            {/* <h1>vacayhome spa & Resort</h1> */}
                        </div>
                    </div>
                    <div class="item"> <img src="style/images/slider3.png" style={{width:'100%', height:' 500px'}} alt="Third slide"/>
                        <div class="carousel-caption">
                            {/* <h1>vacayhome spa & Resort</h1> */}
                        </div>
                    </div>

                </div>
                <a class="left carousel-control" href="#myCarousel1" data-slide="prev"> <img src="style/images/icons/left-arrow.png" onmouseover="this.src = 'style/images/icons/left-arrow-hover.png'" onmouseout="this.src = 'style/images/icons/left-arrow.png'" alt="left"/></a>
                <a class="right carousel-control" href="#myCarousel1" data-slide="next"><img src="style/images/icons/right-arrow.png" onmouseover="this.src = 'style/images/icons/right-arrow-hover.png'" onmouseout="this.src = 'style/images/icons/right-arrow.png'" alt="left"/></a>

            </div>
            <div class="clearfix"></div>

            </header>
        


               
      
        
 )
}
const mapStateToProps = state => {
    return {
        // onlineUser: state.onlineUser,
        // getcart: state.cart
    }
}

const mapDispatchToProps = dispatch => {
  return {
    // userLogout: () => dispatch(userLogout())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SliderImage)
