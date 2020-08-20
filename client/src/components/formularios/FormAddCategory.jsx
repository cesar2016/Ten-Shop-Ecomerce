import React, { useState, useRef, useEffect } from 'react';
import axios from "axios"
import TableCategories from '../Products/TableCategories';
import { connect } from 'react-redux'
import {getAllCategories, addCategory, modifyCategory, deleteCategory, updateCategory} from '../../actions'

 function FormCategory({category, getAllCategories, updateCategory, addCategory}) {

  useEffect(()=>{

    getAllCategories()

  },[])

    const [input, setInput] = useState({
        name: '',
        description: '',
      });
      const [inputDelete, setInputDelete] = useState({
        name: '',
        description: ''
      });


      const handleInputChange = function(e) {
        setInput({
          ...input,
          [e.target.name]: e.target.value
        });
      }

      const handleSubmit = function(e) {
        e.preventDefault();
        addCategory(input)
        .then((recurso) => {         
            if(recurso){             
                alert("This category has been created successfully.")                
            }
        })
        .catch(() => alert("This category already exists."))
      }
     
      const handleInputDeleteChange = function(e) {
        setInputDelete({
          ...inputDelete,
          [e.target.name]: e.target.value
        });
      }
      var elId = useRef(null)

      const handleModifySubmit = function(e) {
        e.preventDefault();
        updateCategory(elId.current, inputDelete)        
        alert("The category has been modify succesfully.")
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
                                <TableCategories categories={category} update={update} elId={elId} deleteCategories={deleteCategory} />
                            </tbody>

                        </table>
                    </div>
            <section className="contact-block jumbotron ">
                <div className="container">
                    <div className="col-md-5 contact-form alert alert-dark">
                        <h3>Add <span>Category</span></h3>
                        <form action="#" method="post" onSubmit={handleSubmit} >
                            <input type="text" className="form-control form-control-lg" name="name" placeholder="Name" id="name" required onChange={handleInputChange} />
                            <input type="text" className="form-control form-control-lg" name="description" placeholder="Description" id="description" onChange={handleInputChange}/>
                            <input type="submit" className="submit-btn" value="Submit" style={{borderRadius:"10px"}}/>
                        </form>
                    </div>
                    <div className="col-md-5 contact-form alert alert-dark" style= {{marginLeft:"0px"}}>
                        <h3>Modify <span>Category</span></h3>
                        <form action="#" method="delete" onSubmit={handleModifySubmit} >
                            <input type="text" className="form-control form-control-lg" name="name" placeholder="Name" id="ModifyName" required onChange={handleInputDeleteChange} />
                        <input type="text" className="form-control form-control-lg" name="description" placeholder="Description" id ="DescriptionName"onChange={handleInputDeleteChange}/>
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
    getAllCategories: () => dispatch(getAllCategories()),
    deleteCategory: (name) => dispatch(deleteCategory(name)),
    updateCategory: (id, body) => dispatch(updateCategory(id, body)),
    addCategory: (body) => dispatch(addCategory(body))
  }
}
  
  

const mapStateToProps = state =>{
  return {
    category: state.categories
  }
}
  



export default connect (mapStateToProps, mapDispatchToProps)(FormCategory)