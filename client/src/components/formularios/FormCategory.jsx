import React, { useState, useRef, useEffect } from 'react';
import TableCategories from '../Products/TableCategories';
import { connect } from 'react-redux'
import {getAllCategories, addCategory, modifyCategory, deleteCategory} from '../../actions';
import Page404 from "../Page404";

 function FormCategory({categories, getAllCategories, addCategory, modifyCategory, elId, onlineUser}) {

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
    alert("The category has been modify succesfully.")
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
      <div class="col-md-8">
        <h3>Category <span>List</span></h3>
        <TableCategories categories={categories} update={update} elId={elId} deleteCategories={{deleteCategory}} />
               
      </div>
     
		<div class="container">
			<div class="row">
				<div class="col-sm-3 my-5">
					<div class="login-form">
						<form action="#" method="post" onSubmit={handleAddSubmit} >
            <h3>Add <span>Category</span></h3>
            <input type="text" className="form-control form-control-lg" name="name" placeholder="Name" id="name" required onChange={handleinputAddChange} />
            <input type="text" className="form-control form-control-lg" name="description" placeholder="Description" id="description" onChange={handleinputAddChange}/>
						<button type="submit" className="submit-btn" value="Submit" class="btn btn-default update">Add</button>
						</form>
					</div>
				</div>
				<div class="col-sm-3 my-5">
					<div class="login-form">
						<form onSubmit={handleModifySubmit} id = {"formulario"}>
            <h3>Update <span>Category</span></h3>
            <input type="text" className="form-control form-control-lg" name="name" placeholder="Name" id="ModifyName" required onChange={handleInputModifyChange} />
            <input type="text" className="form-control form-control-lg" name="description" placeholder="Description" id ="DescriptionName"onChange={handleInputModifyChange}/>
						<button type="submit" className="submit-btn" value="Submit" class="btn btn-default update">Update</button>
						</form>
					</div>
				</div>
			</div>
		</div>
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