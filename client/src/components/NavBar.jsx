import React, { useState, useEffect } from "react"
import "./NavBar.css"
import SearchBar from "./SearchBar.jsx"
import { NavLink } from 'react-router-dom'
import { connect } from "react-redux";



function NavBar({onlineuser}) {
    const [categories, setCategories] = useState([]);
    
    useEffect(() => {
        var but1 = document.getElementById('mati');
        var but2 = document.getElementById('facu');
        if ( typeof onlineuser === "object"){
            but1.style.display = 'none';
            but2.style.display = 'none';
        } else {
            but1.style.display = '';
            but2.style.display = '';
        }
        fetch("http://localhost:3001/categories/")
        .then(r => r.json())
        .then((recurso) => {         
            console.log(onlineuser)
            if(recurso) {                
                setCategories(recurso)
            }
        })
    }, [])
            
        
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
                      </ul>
                      <ul className="navbar-nav ">
                          <li className="nav-item">                            
                            <span className="badge badge-warning sm">11</span>                          
                          <button title="Cart" style={{fontSize:"15px"}} type="button" className="btn btn-info my-2 my-sm-0">
                            <i class="fa fa-shopping-cart" aria-hidden="true"></i>
                            <span style={{fontSize:"10px",position: "absolute",top:"20px"}} className="badge badge-success badge-pill">5</span>                        
                          </button>
                            <li className="nav-item">  
                            <div className={'content'}>  
                              <NavLink to="/cart">
                              <button title="market" style={{ fontSize:"15px"}} type="button" className="btn btn-danger my-2 my-sm-0">
                                <i  className="fa fa-shopping-cart" aria-hidden="true"></i>
                              </button>
                              </NavLink>
                           </div>   
                            </li>
                          &nbsp;
                        <NavLink to="/signin">
                            <li className="nav-item">
                                <button id = "mati" title="LOGIN" style={{fontSize:"15px"}} type="button" className="btn btn-info my-2 my-sm-0">
                                <i className="fa fa-sign-in" aria-hidden="true"></i>
                                </button>
                            </li>
                        </NavLink>
                        &nbsp;                            
                          <NavLink to="/signup">
                        <li className="nav-item">
                          <button id = "facu"title="SIGN UP" style={{fontSize:"15px"}} type="button" className="btn btn-info my-2 my-sm-0">
                            <i className="fa fa-user-plus" aria-hidden="true"></i>
                          </button>
                        </li>
                        </NavLink>
                       </ul> 
                        &nbsp;                            
                        <SearchBar/>
                  </nav>
              </div>
        </header>
        </div>
 )
}
MapStateToProps = state => {
    return {
        onlineuser: state.onlineuser
    }
}

export default connect(mapStateToProps)(NavBar)
