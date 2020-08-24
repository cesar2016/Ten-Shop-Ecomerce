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
    <div className= "signin">
    <div> 
        <h3>Sign In</h3>
    <div>
        <label className= "label">Username: </label>
        <input className="inputs" onChange= {(e) => handleInputChange(e)} type="text" placeholder ="Username" name="username"/>
    </div>
    <div>
        <label className= "label">Password: </label>
        <input className="inputs" onChange= {(e) => handleInputChange(e)} type="password" placeholder="Password" name= "password"/>
    </div>
    <div>
        
            <label>Submit: </label><NavLink to="/"><button className = "botoncito" onClick={(e) => handleSubmit(e)}></button></NavLink>
        
    </div>
    <NavLink className="link" to = "/signup">
    <h4>You do not have an account?</h4>
    </NavLink>
    </div>

    </div>    

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
