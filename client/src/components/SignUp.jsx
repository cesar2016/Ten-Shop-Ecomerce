import React from "react";
import { connect } from "react-redux";
import { addUser } from '../actions'
import "./SignUp.css"
import { NavLink } from "react-router-dom";
import Swal from 'sweetalert2';



function SignUp ({addUser, onlineUser}) {
  const [input, setInput] = React.useState({})
  const [errors, setErrors] = React.useState({});



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

  function handleSubmit() {
    var keys = Object.keys(input)    
    if (errors.firstname || errors.surname || errors.username || errors.password || errors.password2) {
      var err = Object.keys(errors).filter(el => el !== "password2")
      var sum = "";
      err.forEach(el => {
        sum += el+" invalid!!!\n"
      })
      Swal.fire({
            icon: 'error',
            title: sum,
            showConfirmButton: false,
            timer: 1500
          })                  
    } else if (input.password !== input.password2) {
        Swal.fire({
            icon: 'error',
            title: 'Passwords do not match.',
            showConfirmButton: false,
            timer: 1500
          })        
    } else if (keys.length === 0) {
      Swal.fire({
            icon: 'error',
            title: 'Error!!! Incomplete entries',
            showConfirmButton: false,
            timer: 1500
          })        
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



    <section class="contact-block jumbotron bg-info">
      <div class="container h-100 jumbotron bg-info">
    <div class="row justify-content-center h-100 ">
        <div class="col-md-6">
            <div class="well well-sm">
                <div style={{fontSize: '18px',  heigth: '25px'}} class="form-horizontal" method="post">
                   <fieldset className='align-items-center h-100'> 
                        <legend class="text-center header"><h2>Contact Us ... <i className='fa fa-address-book'></i></h2></legend>

                        <div class="form-group">
                            <span class="col-md-1 col-md-offset-2 text-center"><i class="fa fa-user bigicon"></i></span>
                            <div class="col-md-8">
                                <input style={{fontSize: '18px',  heigth: '25px'}} placeholder="Enter your firstname" type="text" name="firstname" value={input.firstname} onChange={handleInputChange} class="form-control"/>
                                  {errors.firstname && ( <small style={{fontSize: '14px',color:'red'}} className={'fa fa-exclamation '}>
                                  {errors.firstname}</small>)}
                            </div>
                        </div>
                        <div class="form-group">
                            <span style={{fontSize: '18px',  heigth: '25px'}} class="col-md-1 col-md-offset-2 text-center"><i class="fa fa-user bigicon"></i></span>
                            <div class="col-md-8">
                                <input style={{fontSize: '18px',  heigth: '25px'}} placeholder="Enter your surname" type="text" name="surname" value={input.surname} onChange={handleInputChange} class="form-control"/>
                                {errors.surname && ( <small style={{fontSize: '14px',color:'red'}} className={'fa fa-exclamation '}>
                                  {errors.surname}</small>)}
                            </div>
                        </div>

                        <div class="form-group">
                            <span class="col-md-1 col-md-offset-2 text-center"><i class="fa fa-user-plus"></i></span>
                            <div class="col-md-8">
                              <input style={{fontSize: '18px',  heigth: '25px'}} placeholder="Enter your username" type="text" name="username" value={input.username} onChange={handleInputChange} class={"form-control"}/>
                              {errors.username && ( <small style={{fontSize: '14px',color:'red'}} className={'fa fa-exclamation '}>
                                  {errors.username}</small>)}
                            </div>
                        </div>

                        <div class="form-group">
                            <span class="col-md-1 col-md-offset-2 text-center"><i class="fa fa-lock"></i></span>
                            <div class="col-md-8">
                              <input style={{fontSize: '18px',  heigth: '25px'}} placeholder="Enter your password" type="password" name="password" value={input.password} onChange={handleInputChange} class="form-control"/>
                              {errors.password && ( <small style={{fontSize: '14px',color:'red'}} className={'fa fa-exclamation '}>
                                  {errors.password}</small>)}
                            </div>
                        </div>

                        <div class="form-group">
                            <span class="col-md-1 col-md-offset-2 text-center"><i class="fa fa-check"></i></span>
                            <div class="col-md-8">
                              <input style={{fontSize: '18px',  heigth: '25px'}} placeholder="Enter your password again" type="password" name="password2" value={input.password2} onChange={handleInputChange} class="form-control"/>
                              {errors.password2 && ( <small style={{fontSize: '14px',color:'red'}} className={'fa fa-exclamation '}>
                                  {errors.password2}</small>)}
                            </div>
                             
                        </div>

                        <div class="form-group">
                            <div class="col-md-12 text-center">
                                <button type="submit" id='15' onClick={() => handleSubmit()} class="btn btn-success btn-lg">Submit</button>
                            </div>
                        </div>
                      </fieldset> 
                </div>
            </div>
        </div>
    </div>
</div>
</section>
    
    


    // <div className="LOGIN">    
    //   <div className="signup">
    //     <h2>Sign Up</h2>              
    //   </div>      
    //       <div><h3>Firstname</h3></div>
    //   <div>
     
    //     <input placeholder="Enter your firstname" type="text" name="firstname" value={input.firstname} onChange={handleInputChange} className={errors.firstname && "danger"}/>
    //           {errors.firstname && (<p className="danger">{errors.firstname}</p>)}
    //   </div>      
    //       <div><h3>Surname</h3></div>
    //   <div>
    //     <input placeholder="Enter your surname" type="text" name="surname" value={input.surname} onChange={handleInputChange} className={errors.surname && "danger"}/>
    //           {errors.surname && (<p className="danger">{errors.surname}</p>)}
    //   </div>      
    //   <div><h3>Username</h3></div>
    //   <div>        
    //   <input placeholder="Enter your username" type="text" name="username" value={input.username} onChange={handleInputChange} className={errors.username && "danger"}/>
    //           {errors.username && (<p className="danger">{errors.username}</p>)}    
    //   </div>      
    //   <div><h3>Password</h3></div>
    //   <div>        
    //     <input placeholder="Enter your password" type="password" name="password" value={input.password} onChange={handleInputChange} className={errors.password && "danger"}/>
    //           {errors.password && (<p className="danger">{errors.password}</p>)}
    //   </div>      
    //   <div><h3>Repeat password please</h3></div>
    //   <div>        
    //     <input placeholder="Enter your password again" type="password" name="password2" value={input.password2} onChange={handleInputChange} className={errors.password2 && "danger"}/>
    //           {errors.password2 && (<p className="danger">{errors.password2}</p>)}
    //   </div>      
    //   <div>
    //   <NavLink to="/">
    //     <button id="15" className="SUBMIT" type="submit" value="Register" onClick={() => handleSubmit()}/>      
    //   </NavLink>
    //   </div>    
    // </div>    
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
