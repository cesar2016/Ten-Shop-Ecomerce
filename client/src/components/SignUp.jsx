import React from "react";
import { connect } from "react-redux";
import { addUser } from '../actions'
import "./SignUp.css"


function SignUp ({addUser, onlineUser}) {
  const [input, setInput] = React.useState({})
  const [errors, setErrors] = React.useState({});

  React.useEffect(() => {    
    if (onlineUser === true) {
      alert("Existing user. Try again")
    }  else if (onlineUser !== false){
      alert("User created successfully")
    }
  },[onlineUser])

  var flag = false;

  
  


  function handleInputChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value
    })

    setErrors(validate({
          ...input,
          [e.target.name]: e.target.value
      }));

  }

  function handleSubmit(e) {
    var keys = Object.keys(input)
    e.preventDefault()
    if (errors.firstname || errors.surname || errors.username || errors.password || errors.password2) {
      var err = Object.keys(errors).filter(el => el !== "password2")
      var sum = "";
      err.forEach(el => {
        sum += el+" invalid!!!\n"
      })    
      alert(sum)
    } else if (input.password !== input.password2) {
        alert("Passwords do not match.")
    } else if (keys.length === 0) {
        alert("Error!!! Incomplete entries")
    } else {
        addUser(input) 
    }
  }
  

  function validate(input) {
    let errors = {};

    if (!input.firstname) {
      errors.firstname = "Firstname is required";
    } else if (!/^[a-zA-Z\-]+$/.test(input.firstname)) {
      errors.firstname = "Firstname is invalid"
    }

    if (!input.surname) {
      errors.surname = "Surname is required";
    } else if (!/^[a-zA-Z\-]+$/.test(input.surname)) {
      errors.surname = "Surname is invalid"
    }

    if (!input.username) {
      errors.username = "Username is required";
    } else if (!/^[a-zA-Z0-9]+$/.test(input.username)) {
      errors.username = "Username is invalid"
    }
    // /(?=.*[0-9])/
    if (!input.password) {
      errors.password = "Password is required";
    } else if (!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/.test(input.password)) {
      errors.password = "Password is invalid"
    }

    if (!input.password2) {
      errors.password2 = "Password is required";
    } else if (!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/.test(input.password2)) {
      errors.password2 = "Password is invalid"
    }

    return errors;
  };


  return (    
    <form onSubmit={(e) => handleSubmit(e)}>
    <div className="LOGIN">    
      <div className="signup">
        <h2>Sign Up</h2>              
      </div>      
          <div><h3>Firstname</h3></div>
      <div>
        {/*<input placeholder="Enter your name" type="text" id="user" name="firstname" onChange={(e) => handleInputChange(e)}/>*/}
        <input placeholder="Enter your firstname" type="text" name="firstname" value={input.firstname} onChange={handleInputChange} className={errors.firstname && "danger"}/>
              {errors.firstname && (<p className="danger">{errors.firstname}</p>)}
      </div>      
          <div><h3>Surname</h3></div>
      <div>
        {/*<input placeholder="Enter your surname" type="text" id="user" name="surname" onChange={(e) => handleInputChange(e)}/>*/}
        <input placeholder="Enter your surname" type="text" name="surname" value={input.surname} onChange={handleInputChange} className={errors.surname && "danger"}/>
              {errors.surname && (<p className="danger">{errors.surname}</p>)}
      </div>      
      <div><h3>Username</h3></div>
      <div>
        {/*<input placeholder="Enter your username" type="text" id="user" name="username" onChange={(e) => handleInputChange(e)}/>*/}
      <input placeholder="Enter your username" type="text" name="username" value={input.username} onChange={handleInputChange} className={errors.username && "danger"}/>
              {errors.username && (<p className="danger">{errors.username}</p>)}    
      </div>      
      <div><h3>Password</h3></div>
      <div>
        {/*<input placeholder="Enter your password" type="password" id="password" onChange={(e) => handleInputChange(e)} name="password"/>*/}
        <input placeholder="Enter your password" type="password" name="password" value={input.password} onChange={handleInputChange} className={errors.password && "danger"}/>
              {errors.password && (<p className="danger">{errors.password}</p>)}
      </div>      
      <div><h3>Repeat password please</h3></div>
      <div>
        {/*<input placeholder="Enter your password" type="password" id="password2" onChange={(e) => handleInputChange(e)} name="password2"/>*/}
        <input placeholder="Enter your password again" type="password" name="password2" value={input.password2} onChange={handleInputChange} className={errors.password2 && "danger"}/>
              {errors.password2 && (<p className="danger">{errors.password2}</p>)}
      </div>      
      <div>
      <button id="15" className="SUBMIT" type="submit" value="Register"/>
      {flag && (<button disabled className="SUBMIT" type="submit" value="Register"/>)}
      </div>    
    </div>
    </form>    
    )
}

// hacer confirmar contraseña
// repetir contraseña (validar contraseña que sean iguales)
// seguridad de la contraseña (regex) 
// ¿no tenes cuenta? registrate
// no mostrar boton para registrarse cuando estas conectado como usuario

const mapDispatchToProps = dispatch => {
  return {
    addUser: (body) => dispatch(addUser(body))  
  }
}


const mapStateToProps = state => {
  return {
    onlineUser: state.onlineUser
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(SignUp)

