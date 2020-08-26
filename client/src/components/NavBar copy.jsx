import React, { useState, useEffect } from "react"
import "./NavBar.css"
import SearchBar from "./SearchBar.jsx"
import { NavLink } from 'react-router-dom'
import { connect } from "react-redux";
import { userLogout } from "../actions/index.js"



function NavBar({onlineUser, userLogout}) {
  
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
                              <span style={{color:"black", marginLeft:"5px", display:"block"}}>RUD Products</span>                                            
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
                            <span className="badge badge-warning sm">11</span>                          
                          <button title="Cart" style={{fontSize:"15px"}} type="button" className="btn btn-info my-2 my-sm-0">
                            <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                            <span style={{fontSize:"10px",position: "absolute",top:"20px"}} className="badge badge-success badge-pill">5</span>                        
                          </button>
                            {/*<li className="nav-item">  */}
                            <div className={'content'}>  
                              <NavLink to="/cart">
                              <button title="market" style={{ fontSize:"15px"}} type="button" className="btn btn-danger my-2 my-sm-0">
                                <i  className="fa fa-shopping-cart" aria-hidden="true"></i>
                              </button>
                              </NavLink>
                           </div>   
                            </li>
                          &nbsp;                          
                            {onlineUser.firstname && (<li className="nav-item">
                              <h4>Welcome {onlineUser.firstname} {onlineUser.surname}</h4>                            
                              <button id = "SIGNOUT" title="sign out" style={{fontSize:"15px"}} type="button" className="btn btn-info my-2 my-sm-0" onClick={() => userLogout()}>
                              <i className="fa fa-sign-out" aria-hidden="true"></i>
                              </button>
                              </li>)}                                                  
                            
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
        onlineUser: state.onlineUser
    }
}

const mapDispatchToProps = dispatch => {
  return {
    userLogout: () => dispatch(userLogout())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar)