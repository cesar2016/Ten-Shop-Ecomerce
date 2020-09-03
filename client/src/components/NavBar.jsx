import React, { useState, useEffect } from "react";
import "./NavBar.css";
import SearchBar from "./SearchBar.jsx";
import { NavLink } from 'react-router-dom';
import { connect } from "react-redux";
import { userLogout, loginUserCookie, lsset } from "../actions/index.js";
import Swal from 'sweetalert2';
import { useHistory } from 'react-router-dom';
var ls = require('local-storage');

function NavBar({onlineUser, userLogout, getcart, loginUserCookie,setid, lsset}) {
  const history = useHistory(); 
  const [categories, setCategories] = useState([]);
  const [admin, setAdmin] = useState(false);
    
    useEffect(() => {
        var but = document.getElementById('SIGNIN');        
        
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
        if (typeof onlineUser !== "object" ) loginUserCookie()
        console.log(onlineUser)
        
      }, [onlineUser])

      useEffect(()=> {
        lsset()
    },[setid.length]);

      function alertt(){
        Swal.fire({
          icon: 'error',
          title: 'Hello! To add to cart, log into your account',
        })
     }
/* var cantproductos = [...getcart,ls.get('idProducts')];
console.log(cantproductos); */
     
     function salirr(){
      Swal.fire({
        icon: 'info',
        title: 'Bye! You have successfully disconnected',
      })
      userLogout()
      history.push('/');

   }

    return (

    <header id="header">
		<div class="header-middle">
			<div class="container">
				<div class="row">
					<div class="col-md-4 clearfix">
						<div class="logo pull-left">
                        <NavLink to="/">
							<a href=""><img src="logo.png" alt="" /></a>
                        </NavLink>
						</div>
					</div>
					<div class="col-md-8 clearfix">
						<div class="shop-menu clearfix pull-right">
							<ul class="nav navbar-nav">
								<li>
                                    <NavLink to="/cart">
                                    <a href="">
                                        <i class="fa fa-shopping-cart badge badge-light">
                                        <i style={{marginLeft:"2px"}}>  {getcart && getcart.length || setid && setid.length}</i>    
                                        </i> 
                                        Cart
                                    </a>
                                    </NavLink>
                                </li>
								<li>
                                { typeof onlineUser !== "object" &&
                                    <NavLink to="/signup">
                                    <a href=""><i class="fa fa-user"></i> Create Account</a>
                                    </NavLink>
                                }
                                </li>
								<li>
                                { typeof onlineUser !== "object" &&
                                    <NavLink to="/signin">
                                    <a href=""><i class="fa fa-lock"></i> Login</a>
                                    </NavLink>
                                }
                                </li>
                                {onlineUser.firstname && (
                                <li>
                                    <a href="" onClick={() => salirr()}><i class="fa fa-lock"></i>WELCOME {onlineUser.firstname.toUpperCase()} {onlineUser.surname.toUpperCase()} Logout</a>
                                    
                                </li>
                                )}
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	
		<div class="header-bottom">
			<div class="container">
				<div class="row">
					<div class="col-sm-9">
						<div class="navbar-header">
							<button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
								<span class="sr-only">Toggle navigation</span>
								<span class="icon-bar"></span>
								<span class="icon-bar"></span>
								<span class="icon-bar"></span>
							</button>
						</div>
						<div class="mainmenu pull-left">
							<ul class="nav navbar-nav collapse navbar-collapse">
								<li>
                                    <NavLink to="/">
                                        <a href="" class="active">Home</a>
                                    </NavLink>
                                </li>
								<li>
                                    <NavLink to="/about" >
                                        <a href="">About</a>
                                    </NavLink>
                                </li>
								<li>
                                    <NavLink to="/contact">
                                        <a href="">Contact</a>
                                    </NavLink>
                                </li>
                                <li class="dropdown">
                                    <a >Categories<i class="fa fa-angle-down"></i></a>
                                    <ul role="menu" class="sub-menu">
                                    <li>
                                        {
                                        categories.map((cat) => {
                                        return (                                           
                                                <NavLink to={`/categories/${cat.name}`}>
                                                    <a href="">{cat.name}</a><br/>                                       
                                                </NavLink>
                                                )
                                            })
                                        } 
                                    </li>  
                                    </ul>
                                </li> 
                                {admin && 
                                <li class="dropdown">
                                    <a >Admin<i class="fa fa-angle-down"></i></a>
                                    <ul role="menu" class="sub-menu">
                                    <li>   
                                    <NavLink className="dropdown-item" to={`/formCategory`}>    
                                        <a href="">Form Category</a> 
                                        </NavLink>                                                 
                                    </li>
                                    <li>     
                                    <NavLink className="dropdown-item" to={`/formProduct`}>  
                                        <a href="">Form Product</a>      
                                        </NavLink>                                          
                                    </li>
                                    <li>       
                                    <NavLink className="dropdown-item" to={`/formAddProduct`}>
                                        <a href="">Add Product</a>                                                 
                                    </NavLink> 
                                    </li>
                                    <li>       
                                    <NavLink className="dropdown-item" to={`/orders`}>
                                        <a href="">Orders</a>                                                 
                                    </NavLink> 
                                    </li>
                                    <li>       
                                    <NavLink className="dropdown-item" to={`/admin`}>
                                        <a href="">Admin</a>                                                 
                                    </NavLink> 
                                    </li>
                                    </ul>
                                </li> 
                                }
							</ul>
						</div>
					</div>
					<div class="col-sm-3">
						<div class="search_box pull-right input-group">
                        <SearchBar/>
						</div>
					</div>
				</div>
			</div>
		</div>
	</header>

)
}
const mapStateToProps = state => {
    return {
        onlineUser: state.onlineUser,
        getcart: state.cart,
        setid: state.setid,
    }
}

const mapDispatchToProps = dispatch => {
  return {
    userLogout: () => dispatch(userLogout()),
    loginUserCookie: () => dispatch(loginUserCookie()),
    lsset: () => dispatch(lsset()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar)