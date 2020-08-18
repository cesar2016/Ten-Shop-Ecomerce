import React, { useState, useRef, useEffect } from 'react';
import axios from "axios"
import TableCategories from '../Products/TableCategories'

export default function FormCategory({category}) {
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
        axios.post("http://localhost:3001/categories/add/", input)
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

      const handleDeleteSubmit = function(e) {
        e.preventDefault();
        axios.put(`http://localhost:3001/categories/${elId.current}`, inputDelete)
        .then(alert("The category has been modify succesfully."))
        .then(window.location = "http://localhost:3000/formCategory")        
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
            axios.delete(`http://localhost:3001/categories/${name}`);            
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
                        <h3>Categorias en <span>Lista</span></h3>
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
                        <form action="#" method="delete" onSubmit={handleDeleteSubmit} >
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