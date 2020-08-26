import React, { useState, useEffect } from "react"
import "./NavBar.css"
import SearchBar from "./SearchBar.jsx"
import { NavLink } from 'react-router-dom'
import { connect } from "react-redux";
import { userLogout } from "../actions/index.js"
import Swal from 'sweetalert2'


function NavBar({onlineUser, userLogout, getcart}) {
     
    return (
         
      
            <footer style={{width: '98%', position: 'absolute'}} className={'bg-primary fluid'}>
                 
                <div class=" footer-social-icon col-md-4 col-sm-6 col-xs-12 width-set-50">
                    <a href="#"><i class="fa fa-facebook"></i></a>
                    <a href="#"><i class="fa fa-twitter"></i></a>                           
                    <a href="#"><i class="fa fa-instagram"></i></a>
                    <a href="#"><i class="fa fa-google-plus"></i></a>
                    <a href="#"><i class="fa fa-youtube-play"></i></a>
                </div>
                <div class=" footer-social-icon col-md-2 col-sm-6 col-xs-12 width-set-50">
                 <strong style={{fontSize:'12px'}}> Leave us your email <i class="fa fa-envelope-o fa-lg"></i></strong>  
                        
                  <div class="input-group" >                    
                      <input type="text" class="form-control subscribe-box" value="" name="subscribe" placeholder="EMAIL ID"/>
                      <span class="input-group-btn">
                          <button type="button" class="btn subscribe-button"><i class="fa fa-paper-plane fa-lg"></i></button>
                      </span>
                  </div>
                </div>
                <div class="footer-social-icon col-md-6 col-sm-6 col-xs-12 width-set-50">
                <span style={{marginTop:'5px'}} class="copyright">
                 2020 All right reserved. Designed by <a href="#" target="_blank">Ten/Shop.  &copy;  </a>
              </span>
                </div>
               
              

                 
            </footer>
            
       
        
 )
}
const mapStateToProps = state => {
    return {
        onlineUser: state.onlineUser,
        getcart: state.cart
    }
}

const mapDispatchToProps = dispatch => {
  return {
    userLogout: () => dispatch(userLogout())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar)
