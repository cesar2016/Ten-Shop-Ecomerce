import React, { useState, useRef, useEffect } from 'react';
import TableCategories from '../Products/TableCategories';
import { connect } from 'react-redux'
import {getAllCategories, addCategory, modifyCategory, deleteCategory} from '../../actions';
import Page404 from "../Page404";
import Swal from 'sweetalert2'; 

 function FormCategory({categories, getAllCategories, addCategory, modifyCategory, elId, onlineUser}) {
   function exitoAdd(){
   Swal.fire({
      icon: 'success', title: 'Your category has been created!', showConfirmButton: false, timer: 1500 }) 
    }
    function exitoUpdate(){
       Swal.fire({ icon: 'success', title: 'The category has been modify succesfully.', showConfirmButton: false, timer: 1500 }) } 
  useEffect(()=>{
    addCategory()
    getAllCategories()
    modifyCategory()
  },[])

  const [inputAdd, setInputAdd] = useState({
    name: '',
    description: '',
  });
  const [inputModify, setinputModify] = useState({
    name: '',
    description: ''
  });

  const handleinputAddChange = function(e) {
    setInputAdd({
    ...inputAdd,
    [e.target.name]: e.target.value
   });
  }
  var addName1 = document.getElementById("name")
  var addName2 = document.getElementById("description") 
  const handleAddSubmit = function(e) {
    e.preventDefault();
    addCategory(inputAdd)
    addName1.value = ""
    addName2.value = ""
}
  const handleInputModifyChange = function(e) {
    setinputModify({
      ...inputModify,
      [e.target.name]: e.target.value
    });
  }
  
  var elId = useRef(null)
  let form = document.getElementById('formulario');
  const handleModifySubmit = function(e) {
    e.preventDefault();
    modifyCategory(inputModify,elId.current)
    form.style.display = 'none';
  };

  function update(elId, body) {        
    body.find((e) => {
    if (e.name == elId) {
      setinputModify(e)
      document.getElementById("ModifyName").value = e.name;            
      document.getElementById("DescriptionName").value = e.description;
      var form = document.getElementById('formulario');
      form.style.display = '';
      return;
      }
    })
  }
    
  if( onlineUser.type == 1){
  return (
     <div>
      <section class="contact-block">
      </section>
      <section class="contact-block col-md-2"> </section>
      <div class="col-md-6 contact-form alert alert-dark">
         <h3>Category <span>List</span></h3>
           <table class="table table-hover">
             <thead>
               <tr className="table-primary">
               <th scope="col">Name</th>
               <th scope="col">Description</th>
               <th scope="col">Edit</th>
               </tr>
               </thead>
               <tbody >
                 <TableCategories categories={categories} update={update} elId={elId} deleteCategories={{deleteCategory}} />
               </tbody>
             </table>
      </div>
      <section className="contact-block jumbotron ">
        <div className="container">
           <div className="col-md-5 contact-form alert alert-dark">
               <h3>Add <span>Category</span></h3>
                <form action="#" method="post" onSubmit={handleAddSubmit} >
                   <input type="text" className="form-control form-control-lg" name="name" placeholder="Name" id="name" required onChange={handleinputAddChange} />
                   <input type="text" className="form-control form-control-lg" name="description" placeholder="Description" id="description" onChange={handleinputAddChange}/>
                   <input type="submit" onClick={() => exitoAdd()}className="submit-btn" value="Submit" style={{borderRadius:"10px"}}/>
                </form>
                </div>
                <div className="col-md-5 contact-form alert alert-dark" >
                    <h3>Modify <span>Category</span></h3>
                    <form onSubmit={handleModifySubmit} id = {"formulario"} style={{display:'none'}}>
                    <input type="text" className="form-control form-control-lg" name="name" placeholder="Name" id="ModifyName" required onChange={handleInputModifyChange} />
                    <input type="text" className="form-control form-control-lg" name="description" placeholder="Description" id ="DescriptionName"onChange={handleInputModifyChange}/>
                    <input type="submit" onClick={() => exitoUpdate()}  className="submit-btn" value="Submit" style={{borderRadius:"10px"}}/>
                    </form>
                </div>
            </div>
     </section>
        </div>
  );
 }else{
  return (
    <div>
    <Page404 />
    </div>
  )
 }

}

const mapDispatchToProps = dispatch =>{

return {
    addCategory: (category)=> dispatch(addCategory(category)),
    deleteCategory: (category)=> dispatch(deleteCategory(category)),
    modifyCategory: (body,id)=> dispatch(modifyCategory(body,id)),
    getAllCategories: ()=> dispatch(getAllCategories())
  }
}
  
  

const mapStateToProps = state =>{
   return {
      categories: state.categories,
      onlineUser: state.onlineUser
    }
}
  
export default connect (mapStateToProps, mapDispatchToProps)(FormCategory)