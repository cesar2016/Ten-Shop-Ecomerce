import React ,{useEffect,useState} from "react";
import {connect} from "react-redux";
import "./SignIn.css"
import { NavLink } from "react-router-dom";
import { loginUser } from "../actions";


function SignIn ({loginUser,onlineUser}){

    const [input, setInput] = useState({})
    // useEffect(() => {    
    //     if (onlineUser === true) {
    //       alert("Existing user. Try again")
    //     }  else if (onlineUser !== false){
    //       alert("User created successfully")
    //     }
    //   },[onlineUser])
 function handleInputChange(e) {
     setInput({
         ...input,
         [e.target.name]: e.target.value
     })
 }
function handleSubmit (e){
    e.preventDefault();
    console.log(input)
    loginUser(input)
}
return (
    <form onSubmit={(e) => handleSubmit(e)}>
    <div className= "signin">
    <div> 
        <h3>Sign In</h3>
    <div>
        <label className= "label">Username: </label>
        <input className="inputs" onChange= {(e) => handleInputChange(e)} type="text" placeholder ="Username" name="username"/>
    </div>
    <div>
        <label className= "label">Password: </label>
        <input className="inputs" onChange= {(e) => handleInputChange(e)} type="text" placeholder="Password" name= "password"/>
    </div>
    <div>
        <label>Submit: </label><button className = "botoncito"></button>
    </div>
    <NavLink className="link" to = "/signup">
    <h4>You do not have an account?</h4>
    </NavLink>
    </div>

    </div>
    </form>

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
