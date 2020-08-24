import React, { useState, useEffect } from "react"
import "./NavBar.css"
import SearchBar from "./SearchBar.jsx"
import { NavLink } from 'react-router-dom'
import { connect } from "react-redux";
import { userLogout } from "../actions/index.js"
import Swal from 'sweetalert2'


function NavBar({onlineUser, userLogout, getcart}) {
  
  const [categories, setCategories] = useState([]);
  const [admin, setAdmin] = useState(false);
    
    useEffect(() => {
        var but = document.getElementById('SIGNIN');        
        if ( typeof onlineUser === "object"){
            but.style.display = 'none';          
        } else {
            but.style.display = '';            
        }
        fetch("http://localhost:3001/categories/")
        .then(r => r.json())
        .then((recurso) => {                     
            if(recurso) {                
                setCategories(recurso)
            }
        })
        if (typeof onlineUser  === "object"){
          if (onlineUser.type == 1){
            setAdmin(true)
          }
        } 
        console.log(onlineUser)
      }, [onlineUser])
      
      function alertt(){
        Swal.fire({
          icon: 'error',
          title: 'Hello! To add to cart, log into your account',
        })
     }
      
            
        
    return (
        <header className="header-content">
                <nav style={{fontSize:"20px", color:"black"}} className="navbar navbar-icon-top navbar-expand-lg navbar-dark bg-danger fixed-top">
                     <div id="logo">                                    
                    <NavLink to="/">                         
                        <a href="/"><span>Ten</span><span style={{color:"yellow"}}>/ Shop</span></a>
                    </NavLink>                         
                    </div>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                 <div className="collapse navbar-collapse" id="navbarSupportedContent">
                      <ul className="navbar-nav mr-auto">
                        <NavLink to="/">
                        <li style={{marginTop:"10px"}} className="nav-item active">
                          <a className="nav-link" href="#">
                          <i className="fa fa-home fa-lg"></i>                                                              
                          </a>
                        </li>
                        </NavLink> 
                        <NavLink to="/about" >
                        <li style={{marginTop:"10px"}} className="nav-item">
                          <a className="nav-link" href="#">                                 
                          <span style={{color:"white"}}>About</span>
                          </a>
                        </li>
                        </NavLink>
                        
                        <NavLink to="/contact">
                        <li style={{marginTop:"10px"}} className="nav-item">
                          <a className="nav-link" href="#">                                 
                          <span style={{color:"white"}}>Contact</span>
                          </a>
                        </li>
                        </NavLink>                            
                        <li style={{marginTop:"5px"}} className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">                                
                            <span style={{color:"white"}}>Categories</span>
                            </a>
                            <div style={{fontSize:"15px", borderRadius:"10px"}} className="dropdown-menu" aria-labelledby="navbarDropdown">
                            {
                                categories.map((cat, i) => {
                                    return (                                           
                                    <NavLink className="dropdown-item" to={`/categories/${cat.name}`}>
                                        <span style={{color:"black", marginLeft:"5px", display:"block"}}>{cat.name}</span>                                            
                                    </NavLink>
                                    )
                                })
                            }                                
                            </div>
                         </li>
                        {admin && 
                        <li style={{marginTop:"5px"}} className="nav-item dropdown">
                          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <span style={{color:"white"}}>Admin</span>
                          </a>
                          <div style={{fontSize:"15px", borderRadius:"10px"}} className="dropdown-menu" aria-labelledby="navbarDropdown">
                          <NavLink className="dropdown-item" to={`/formCategory`}>
                              <span style={{color:"black", marginLeft:"5px", display:"block"}}>CRUD Category</span>                                            
                          </NavLink>
                          <NavLink className="dropdown-item" to={`/formProduct`}>
                              <span style={{color:"black", marginLeft:"5px", display:"block"}}>CRUD Products</span>                                            
                          </NavLink>
                          <NavLink className="dropdown-item" to={`/formAddProduct`}>
                              <span style={{color:"black", marginLeft:"5px", display:"block"}}>Add Products</span>                                            
                          </NavLink>
                          <NavLink className="dropdown-item" to={`/admin`}>
                              <span style={{color:"black", marginLeft:"5px", display:"block"}}>Admin</span>                                            
                          </NavLink>
                          </div>
                        </li>
                        }
                      </ul>
                      
                      <ul className="navbar-nav ">
                          <li className="nav-item">   
                            <div className={'content'}>  
                              {typeof onlineUser !== "object" && 
                              <button title="market" type="button" onClick={() => alertt()} className="btn btn-danger my-2 my-sm-0">  
                                <i style={{fontSize:"17px"}} className="fa fa-shopping-cart badge badge-warning ">
                                  <span className="badge badge-info"></span>
                                </i>
                              </button>
                              }
                              {typeof onlineUser === "object" &&  <NavLink to="/cart">
                              <button title="market" type="button" className="btn btn-danger my-2 my-sm-0">
                                 
                                <i style={{fontSize:"17px"}} className="fa fa-shopping-cart badge badge-warning ">
                            <span className="badge badge-info">{getcart && getcart.length}</span>
                                </i>
                              </button>
                              </NavLink>}
                              
                           </div>   
                            </li>
                          &nbsp;                          
                            {/* {onlineUser.firstname && (<li className="nav-item"> */}
                              {/* <h4>Welcome {onlineUser.firstname} {onlineUser.surname}</h4>}                             */}
                              {/* <button id = "SIGNOUT" title="sign out" style={{fontSize:"15px"}} type="button" className=" nav-link dropdown-toggle btn btn-info my-2 my-sm-0" onClick={() => userLogout()}>
                               <i className="fa fa-sign-out" aria-hidden="true"></i>
                              </button>
                              </li>
                              
                            )} */}
                                                     
                            {onlineUser.firstname && (<li className="nav-item">
                              {/* <h4>Welcome {onlineUser.firstname} {onlineUser.surname}</h4>} */}
                              <div class="dropdown">
                            <button id = "SIGNOUT" title="sign out" style={{fontSize:"14px"}} type="button" className="btn btn-danger dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                           <small text-danger><i className='fa fa-user'></i> Welcome {onlineUser.firstname} {onlineUser.surname}</small> 
                            </button>
                              <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <a style={{color:"red"}} class="dropdown-item"  onClick={() => userLogout()}>LOGOUT</a>                                
                              </div>
                            </div> 
                              </li>
                              
                            )}
                                                      
                                                                             
                            
                        <NavLink to="/signin">
                            <li className="nav-item">
                          <button id = "SIGNIN" title="sign in" style={{fontSize:"15px"}} type="button" className="btn btn-info my-2 my-sm-0">
                            <i className="fa fa-sign-in" aria-hidden="true"></i>
                        </button>
                              </li>
                        </NavLink>

                       </ul> 
                        &nbsp;                            
                        <SearchBar/>
              </div>
                  </nav>
        </header>
        
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
