import React, { useState, useRef, useEffect } from 'react';
import TableUsers from "./TableUsers";
import { connect } from "react-redux";
import { getUsers , updateUser, onlineUserError, deleteUser} from "../../actions";
import Swal from 'sweetalert2';
import Page404 from "../Page404";


function FormAdmin({ updateUser, users, onlineUser, getUsers, deleteUser}) {
  
  useEffect(() => {
    getUsers()  
       
  },[])

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
   elId = useRef(null)
  const handleSubmit = function(e) {
    updateUser(elId.current, input)
    getUsers() 
    e.preventDefault();     
    var form = document.getElementById('formulario');
        form.style.display = 'none'
    
    console.log(elId.current)
    console.log(input)    
    getUsers();
    Swal.fire(
      'Good job!',
      'User updated successfully',
      'success'
    )
    
  }


  function deleUser(idUser){    
    Swal.fire({
      title: 'Are you sure?',
      text: "Do you want to delete this User?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.value) {        
        deleteUser(idUser)
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
    })
     
    // alert('Delete success Category')

  }    



 if(onlineUser.type == 1){

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
                            <tbody>
                               
                                {users && users.map((p) => {                 
                
                                    return (
                                      <tr>
                                        <th scope="row">{
                                        p.type == 1 && 'ADMIN' ||  p.type == 2 && 'USER' || p.type == 3 && 'VISITOR'
                                        }</th>
                                        <td> {p.username} </td>
                                        <td> {p.firstname} </td>
                                        <td> {p.surname} </td>
                                          <td>
                                            <button type="button" class="btn btn-success" onClick={(e) => update(elId.current = p.id, users)            
                                            }>
                                          <i className="fa fa-pencil"></i>
                                            </button>
                                          &nbsp;                                           
                                          <button type="button" class="btn btn-danger" onClick={(e)=>deleUser(p.id)}  >
                                            <i className="fa fa-trash"></i>
                                          </button>
                                        </td>
                                        </tr>
                                        )
                                      }
                                )}
                             </tbody>
                        </table>
                    </div>

                    <div class="col-md-6 contact-form alert alert-dark">
                        <h3>Management <span>Users</span></h3>
                       <form id={'formulario'} style={{display:'none'}} onSubmit = {handleSubmit}>
                          <div class="form-group row">
                            <label for="inputEmail3" class="col-sm-2 col-form-label">Name</label>
                            <div class="col-sm-10">
                            <input type="text" class="form-control form-control-lg" name="firstname" placeholder="Firstname" id="firstname" onChange={handleInputChange} required="true"/>
                            </div>
                          </div>
                          <div class="form-group row">
                            <label for="inputPassword3" class="col-sm-2 col-form-label">Surname</label>
                            <div class="col-sm-10">
                            <input type="text" class="form-control form-control-lg" name="surname" id="surname" onChange={handleInputChange} required="true"/>
                            </div>
                          </div>
                          <div class="form-group row">
                            <label for="inputEmail3" class="col-sm-2 col-form-label">Type User</label>
                            <div class="col-sm-10">                            
                            <select class="form-control form-control-lg" name="type" placeholder="Type" id="type" onChange={handleInputChange} required="true">
                              <option name='type' value='1'>Admin</option>
                              <option name='type' value='2'>User</option>
                              <option name='type' value='3'>Vsitor</option>
                            </select>
                            </div>
                          </div>                                                  
                          <div class="form-group row">
                            <div class="col-sm-10">
                              <button type="submit" class="submit-btn">Submit</button>
                            </div>
                          </div>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
  }else{
    return(
      <div>
      <Page404 />
      </div>
    )
  }   
};

const mapDispatchToProps = dispatch => {
  return {
    updateUser: (id, body) => dispatch(updateUser(id, body)),
    getUsers: () => dispatch(getUsers()),
    deleteUser: (id) => dispatch(deleteUser(id))
  }
}

const mapStateToProps = state => {
  return {
    users: state.all_users,
    onlineUser : state.onlineUser
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FormAdmin)