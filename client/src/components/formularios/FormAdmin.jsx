import React, { useState, useRef, useEffect } from 'react';
import TableUsers from "./TableUsers";
import { connect } from "react-redux";
import { getUsers } from "../../actions";

function FormAdmin({getUsers, users}) {
const [input, setInput] = useState([])
  
  useEffect(() => {
    getUsers()
  },[])

  const handleInputChange = function(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value
    });
  }

  // var categ = [];///ARARAY CATTTTEGORIASSSSS

  var elId = useRef(null)
   function update(id, users) {        
     users.find((e) => {
       if (e.id == id) {
         setInput(e)
         document.getElementById("firstname").value = e.firstname;            
         document.getElementById("surname").value = e.surname;
         document.getElementById("type").value = e.type;
         var form = document.getElementById('formulario');
         form.style.display = ''
         return;
       }
     })
   }

  const handleSubmit = function(e) {
    let form = document.getElementById('formulario');
        form.style.display = 'none';
    e.preventDefault();
    updateUser(id, body)
  }

    return (
        <div className="container">
        <section class="contact-block"></section>
            <section class="contact-block jumbotron">
                <div class="container">
                    <div class="col-md-6 contact-form alert alert-dark">
                        <h3>Users in <span>List</span></h3>
                        <table class="table table-hover">
                             <thead>
                                <tr className="table-primary">
                                    <th scope="col">Type</th>
                                    <th scope="col">Username</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Surname</th>
                                    <th scope="col">Edit</th>
                                </tr>
                             </thead>
                            <tbody >
                                <TableUsers users={users} update= {update} elId = {elId}/>
                            </tbody>
                        </table>
                    </div>

                    <div class="col-md-6 contact-form alert alert-dark">
                        <h3>Management <span>Users</span></h3>
                       <form id={'formulario'} style={{display:'none'}} onSubmit = {handleSubmit()}>
                            <input type="text" class="form-control form-control-lg" name="name" placeholder="Firstname" id="firstname" onChange={handleInputChange} required="true"/>
                            <input type="text" class="form-control form-control-lg" name="description" placeholder="Surname" id="surname" onChange={handleInputChange} required="true"/>
                            <input type="text" class="form-control form-control-lg" name="price" placeholder="Type" id="type" onChange={handleInputChange} required=""/>
                            <input type="submit" class="submit-btn" value="Submit" />
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
};

const mapDispatchToProps = dispatch => {
  return {
    getUsers: () => dispatch(getUsers()),
  }
}

const mapStateToProps = state => {
  return {
    users: state.all_users
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FormAdmin)