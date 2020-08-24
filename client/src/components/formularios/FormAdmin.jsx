import React, { useState, useRef, useEffect } from 'react';
import TableUsers from "./TableUsers";
import { connect } from "react-redux";
import { getUsers , updateUser} from "../../actions";

function FormAdmin({ updateUser}) {
const [input, setInput] = useState([])
  

  const handleInputChange = function(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value
    });
  }

  var elId = useRef(null)
   function update(id, users) {        
     users.find((e) => {
       if (e.id == id) {
         var form = document.getElementById('formulario');
         setInput(e)
         document.getElementById("firstname").value = e.firstname;            
         document.getElementById("surname").value = e.surname;
         document.getElementById("type").value = e.type;
         form.style.display = ''
         return;
       }
     })
   }
   elId = useRef(null)
  const handleSubmit = function(e) {
    e.preventDefault();
    console.log(elId.current)
    console.log(input)
    updateUser(elId.current, input)
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
                                <TableUsers  update= {update} elId = {elId}/>
                             </tbody>
                        </table>
                    </div>

                    <div class="col-md-6 contact-form alert alert-dark">
                        <h3>Management <span>Users</span></h3>
                       <form id={'formulario'} style={{display:'none'}} onSubmit = {handleSubmit}>
                            <input type="text" class="form-control form-control-lg" name="firstname" placeholder="Firstname" id="firstname" onChange={handleInputChange} required="true"/>
                            <input type="text" class="form-control form-control-lg" name="surname" placeholder="Surname" id="surname" onChange={handleInputChange} required="true"/>
                            <input type="text" class="form-control form-control-lg" name="type" placeholder="Type" id="type" onChange={handleInputChange} required="true"/>
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
    updateUser: (id, body) => dispatch(updateUser(id, body)),
    getUsers: () => dispatch(getUsers()),
  }
}

const mapStateToProps = state => {
  return {
    users: state.all_users
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FormAdmin)