import React from "react";
import { connect } from "react-redux";
import { addUser } from '../actions'
import "./SignUp.css"


function SignUp ({addUser}) {
  const [input, setInput] = React.useState({})

  function handleInputChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value
    })
  }

  function handleSubmit(e) {
    e.preventDefault()
    addUser(input);
  }


  return (    
    <form onSubmit={(e) => handleSubmit(e)}>
    <div className="LOGIN">    
      <div className="signup">
        <h2>Sign Up</h2>              
      </div>      
          <div><h3>Firstname</h3></div>
      <div>
        <input placeholder="Enter your name" type="text" id="user" name="firstname" onChange={(e) => handleInputChange(e)}/>
      </div>      
          <div><h3>Surname</h3></div>
      <div>
        <input placeholder="Enter your surname" type="text" id="user" name="surname" onChange={(e) => handleInputChange(e)}/>
      </div>      
      <div><h3>Username</h3></div>
      <div>
        <input placeholder="Enter your username" type="text" id="user" name="username" onChange={(e) => handleInputChange(e)}/>
      </div>      
      <div><h3>Password</h3></div>
      <div>
        <input placeholder="Enter your password" type="password" id="password" onChange={(e) => handleInputChange(e)} name="password"/>
      </div>      
      <div><h3>Repeat password please</h3></div>
      <div>
        <input placeholder="Enter your password" type="password" id="password2" onChange={(e) => handleInputChange(e)} name="password2"/>
      </div>      
      <div>
      <button className="SUBMIT" type="submit" value="Register"/>
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



export default connect(null, mapDispatchToProps)(SignUp)

