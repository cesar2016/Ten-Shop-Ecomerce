import React, { useState, useRef, useEffect } from 'react';
import axios from "axios"
import TableCategories from '../Products/TableCategories';
import { connect } from 'react-redux'
import {getAllCategories, addCategory, modifyCategory, deleteCategory} from '../../actions'

 function FormCategory({categories, getAllCategories, addCategory, modifyCategory}) {

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
        e.preventDefault();
        modifyCategory(inputModify)
    //     axios.put(`http://localhost:3001/categories/${elId.current}`, inputModify)
    //     .then(alert("The category has been modify succesfully."))
    //     .then(window.location = "http://localhost:3000/formCategory")        
      };

       function update(name, cat) {
       cat.find((e) => {
         if (e.name == name) {
             document.getElementById("ModifyName").placeholder = e.name;
             document.getElementById("DescriptionName").placeholder = e.description;
             return e;
         }
         })
     }
      function deleteCategory(name) {   
        var opcion = window.confirm("You want to remove this category?");
        if (opcion == true) {
            deleteCategory(name)            
            window.location = 'http://localhost:3000/formCategory'
            alert('Deleted Succesfully')
        } 
    }

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
                            {/* update={update} */}
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
                    <div className="col-md-5 contact-form alert alert-dark" style= {{marginLeft:"0px"}}>
                        <h3>Modify <span>Category</span></h3>
                        <form action="#" method="delete" onSubmit={handleModifySubmit} >
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
    modifyCategory: (category)=> dispatch(modifyCategory(category)),
    getAllCategories: ()=> dispatch(getAllCategories())
  }
}
  
  
const mapStateToProps = state =>{
   return {
      categories: state.categories
    }
}
  
export default connect (mapStateToProps, mapDispatchToProps)(FormCategory)