import React, { useState, useRef, useEffect } from 'react';
import axios from "axios"
import TableCategories from '../Products/TableCategories';
import { connect } from 'react-redux'
import {getAllCategories, addCategory, modifyCategory, deleteCategory} from '../../actions'

 function FormCategory({categories, getAllCategories, addCategory, modifyCategory, elId}) {

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
   const handleAddSubmit = function(e) {
        e.preventDefault();
        addCategory(inputAdd)
        // document.getElementById("1").value = ""
        // document.getElementById("2").value = ""
      //ejecuto addcategory pasandole el input
    
      //   .then((recurso) => {         
      //       if(recurso){             
      //           alert("This category has been created successfully.")                
      //       }
      //   })
      //   .catch(() => alert("This category already exists."))
       }
      const handleInputModifyChange = function(e) {
        setinputModify({
          ...inputModify,
          [e.target.name]: e.target.value
        });
      }
      var elId = useRef(null)

      const handleModifySubmit = function(e) {
        let form = document.getElementById('formulario');
        form.style.display = 'none';
        e.preventDefault();
        console.log(inputModify)
        modifyCategory(inputModify,elId.current)
        form.style.display = " "
    //     axios.put(`http://localhost:3001/categories/${elId.current}`, inputModify)
    //     .then(alert("The category has been modify succesfully."))
    //     .then(window.location = "http://localhost:3000/formCategory")        
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
    
    //   function deleteCategory(name) {   
    //     var opcion = window.confirm("You want to remove this category?");
    //     if (opcion == true) {
    //         deleteCategory(name)            
    //         window.location = 'http://localhost:3000/formCategory'
    //         alert('Deleted Succesfully')
    //     } 
    // }
     
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
                                <TableCategories categories={categories} update={update} elId={elId} deleteCategories={deleteCategory} />
                            </tbody>

                        </table>
                    </div>
            <section className="contact-block jumbotron ">
                <div className="container">
                    <div className="col-md-5 contact-form alert alert-dark">
                        <h3>Add <span>Category</span></h3>
                        <form action="#" method="post" onSubmit={handleAddSubmit} >
                            <input id = "1" type="text" className="form-control form-control-lg" name="name" placeholder="Name" id="name" required onChange={handleinputAddChange} />
                            <input id ="2" type="text" className="form-control form-control-lg" name="description" placeholder="Description" id="description" onChange={handleinputAddChange}/>
                            <input type="submit" className="submit-btn" value="Submit" style={{borderRadius:"10px"}}/>
                        </form>
                    </div>
                    <div className="col-md-5 contact-form alert alert-dark" >
                        <h3>Modify <span>Category</span></h3>
                        <form onSubmit={handleModifySubmit} id = {"formulario"} style={{display:'none'}}>
                            <input type="text" className="form-control form-control-lg" name="name" placeholder="Name" id="ModifyName" required onChange={handleInputModifyChange} />
                        <input type="text" className="form-control form-control-lg" name="description" placeholder="Description" id ="DescriptionName"onChange={handleInputModifyChange}/>
                            <input type="submit" className="submit-btn" value="Submit" style={{borderRadius:"10px"}}/>
                        </form>
                    </div>
                </div>
                

            </section>
            </div>
            );
            }

const mapDispatchToProps = dispatch =>{


return {
    addCategory: (category)=> dispatch(addCategory(category)),
    // deleteCategory: ()=> dispatch(deleteCategory),
    modifyCategory: (category,inputModify)=> dispatch(modifyCategory(category,inputModify)),
    getAllCategories: ()=> dispatch(getAllCategories())
  }
}
  
  

const mapStateToProps = state =>{
   return {
      categories: state.categories
    }
}
  
export default connect (mapStateToProps, mapDispatchToProps)(FormCategory)