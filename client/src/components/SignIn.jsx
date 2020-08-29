import React ,{useEffect,useState} from "react";
import {connect} from "react-redux";
import "./SignIn.css"
import { NavLink } from "react-router-dom";
import { loginUser } from "../actions";



function SignIn ({loginUser,onlineUser}){
    const [flag, setFlag] = useState(false)
    const [input, setInput] = useState({})
    /*useEffect(() => {    
        if (onlineUser === 2) {
          alert("Existing user. Try again")
        }  else if (typeof onlineUser === "object"){            
          alert("User created successfully")
        }
      },[onlineUser])*/
 function handleInputChange(e) {
     setInput({
         ...input,
         [e.target.name]: e.target.value
     })
 }
function handleSubmit (e){    
    loginUser(input)
}
return (   

    
     
    <section  class="contact-block ">

<section class="image-head-wrapper" style={{backgroundImage: `url(${'https://r3.whistleout.com.mx/public/images/articles/2016/06/187625854.jpg'})`}}>
                <div class="inner-wrapper">
                    <h1 text-warning>WELCOME!</h1>
                </div>
                <div class="content" >
                    <div class="align-items-center h-100">
                        <div class="col-3 mx-auto bg-info">
                            <div class="text-center">
                                <img id="profile-img" className="rounded-circle profile-img-card" src="https://test-neuroclick.cl/wp-content/uploads/2020/01/Neuroclick-icono-login.png" width="100" height="100" />
                                <p id="profile-name" className="profile-name-card"></p>
                                <form  class="form-signin">
                                    <input name="username" onChange= {(e) => handleInputChange(e)} style={{height:"40px", fontSize:'18px'}} type="text" className="form-control form-group" placeholder="User Name" required autofocus />                               
                                    <input name= "password" onChange= {(e) => handleInputChange(e)} style={{height:"40px", fontSize:'18px'}} type="password" className="password" id="inputPassword" class="form-control form-group" placeholder="Password" required autofocus />
                                    <NavLink to="/">
                                    <button  class="btn btn-lg btn-warning btn-block btn-signin" onClick={(e) => handleSubmit(e)}>
                                        Enter
                                    </button>
                                    </NavLink>
                                </form> 
                                <div class="clearfix alert alert">
                                <NavLink className="link" to = "/signup">
                                    <h3><strong title="Clic you account!" className={'fa fa-edit'}  style={{color:'#fff'}}>
                                              - You do not have an account?
                                        </strong>
                                    </h3>
                                </NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div> 
                     
            </section>
           

       
               
            </section>
            
    
    // <div className= "signin">
    // <div> 
    //     <h3>Sign In</h3>
    // <div>
    //     <label className= "label">Username: </label>
    //     <input className="inputs" onChange= {(e) => handleInputChange(e)} type="text" placeholder ="Username" name="username"/>
    // </div>
    // <div>
    //     <label className= "label">Password: </label>
    //     <input className="inputs" onChange= {(e) => handleInputChange(e)} type="password" placeholder="Password" name= "password"/>
    // </div>
    // <div>
        
    //         <label>Submit: </label><NavLink to="/"><button className = "botoncito" onClick={(e) => handleSubmit(e)}></button></NavLink>
        
    // </div>
    // <NavLink className="link" to = "/signup">
    // <h4>You do not have an account?</h4>
    // </NavLink>
    // </div>

    // </div> 
    
 
    
    

                 

)}
const mapDispatchToProps = dispatch => {
    return {
    loginUser: (body) => dispatch(loginUser(body))
    }
}
const mapStateToProps = state => {
    return {
        onlineUser : state.onlineUser
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)
