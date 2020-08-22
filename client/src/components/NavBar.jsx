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
                       

                    <nav style={{fontSize:"20px", color:"black"}} class="navbar navbar-icon-top navbar-expand-lg navbar-dark bg-danger fixed-top">
                         <div id="logo">                                    
                        <NavLink to="/">                         
                            <a href="/"><span>Ten</span><span style={{color:"yellow"}}>/ Shop</span></a>
                        </NavLink>                         
                        </div>
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>

                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav mr-auto">
                            <NavLink to="/">
                            <li style={{marginTop:"10px"}} class="nav-item active">
                                <a class="nav-link" href="#">
                                <i class="fa fa-home fa-lg"></i>                                                              
                                </a>
                            </li>
                            </NavLink> 
                            
                            <NavLink to="/about" >
                            <li style={{marginTop:"10px"}} class="nav-item">
                                <a class="nav-link" href="#">                                 
                                <span style={{color:"white"}}>About</span>
                                </a>
                            </li>
                            </NavLink>
                            <NavLink to="/contact">
                            <li style={{marginTop:"10px"}} class="nav-item">
                                <a class="nav-link" href="#">                                 
                                <span style={{color:"white"}}>Contact</span>
                                </a>
                            </li>
                            </NavLink>                            
                            <li style={{marginTop:"5px"}} class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">                                
                                <span style={{color:"white"}}>Categories</span>
                                </a>
                                <div style={{fontSize:"15px", borderRadius:"10px"}} class="dropdown-menu" aria-labelledby="navbarDropdown">
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

                            <ul class="navbar-nav ">
                            <li class="nav-item">                            
                                <span class="badge badge-warning sm">11</span>                          
                            <button title="Cart" style={{fontSize:"15px"}} type="button" class="btn btn-info my-2 my-sm-0">
                            <i class="fa fa-shopping-cart" aria-hidden="true"></i>
                            </button>
                            </li>
                            &nbsp;
                            <NavLink to="/signin">
                            <li class="nav-item">
                            <button id = "mati" title="LOGIN" style={{fontSize:"15px"}} type="button" class="btn btn-info my-2 my-sm-0">
                            <i class="fa fa-sign-in" aria-hidden="true"></i>
                            </button>
                            </li>
                            </NavLink>
                            &nbsp;                            
                            <li class="nav-item">
                            <NavLink to="/signup">
                            <button id = "facu"title="SIGN UP" style={{fontSize:"15px"}} type="button" class="btn btn-info my-2 my-sm-0">
                            <i class="fa fa-user-plus" aria-hidden="true"></i>
                            </button>
                            </NavLink>
                            </li>
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
        onlineuser: state.onlineuser
    }
}

export default connect(mapStateToProps)(NavBar)
