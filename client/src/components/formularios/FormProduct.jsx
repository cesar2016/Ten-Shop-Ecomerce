import React, { useState, useRef, useEffect } from 'react';
import TableProducts from "../Products/TableProducts"
import axios from "axios";



export default function FormProduct({products, categories}) {

    const [input, setInput] = useState({});
   
    

      const handleInputChange = function(e) {
        setInput({
          ...input,
          [e.target.name]: e.target.value
        });
      }


    var elId = useRef(null)
      function update(id, prod) {
      prod.find((e) => {
        if (e.id == id) {
            document.getElementById("name").placeholder = e.name;
            document.getElementById("description").placeholder = e.description;
            document.getElementById("price").placeholder = e.price;
            document.getElementById("stock").placeholder = e.stock;
            document.getElementById("image").placeholder = e.image;
            return e;
        }
        })
    }

    const handleSubmit = function(e) {
        var a = document.getElementById("categorie").value;
        alert(a);
      e.preventDefault();
      axios.put(`http://localhost:3001/products/${elId.current}`, input)        
    }

    function deleteProduct(id) {   
        var opcion = window.confirm("Desea eliminar este Articulo");
        if (opcion == true) {
            axios.delete(`http://localhost:3001/products/${id}`);            
            window.location = 'http://localhost:3000/formProduct'
            alert('eliminado con exito')
        } 
    }




    return (

        <div className="container">


        <section class="contact-block"></section>
            <section class="contact-block jumbotron">
                <div class="container">
                    <div class="col-md-6 contact-form alert alert-dark">
                        <h3>Productos en <span>Lista</span></h3>
                        <table class="table table-hover">
                             <thead>
                                <tr className="table-primary">
                                    <th scope="col">ID</th>
                                    <th scope="col">Nombre</th>
                                    <th scope="col">Editar</th>

                                </tr>
                             </thead>

                            <tbody >
                                <TableProducts products={products} update={update} elId={elId} deleteProduct={deleteProduct}/>
                            </tbody>

                        </table>
                    </div>

                    <div class="col-md-6 contact-form alert alert-dark">
                        <h3>Administracion  <span>Productos</span></h3>
                        <form onSubmit={handleSubmit}>

                            <input type="text" class="form-control form-control-lg" name="name" placeholder="Nombre" id="name" onChange={handleInputChange} required=""/>
                            <input type="text" class="form-control form-control-lg" name="description" placeholder="Descripcion" id="description" onChange={handleInputChange} required=""/>
                            <input type="text" class="form-control form-control-lg" name="price" placeholder="$ Precio" id="price" onChange={handleInputChange} required=""/>
                            <input type="text" class="form-control form-control-lg" name="stock" placeholder="Cantidad" id="stock" onChange={handleInputChange} required=""/>
                            <div class="form-check form-check-inline">
                                <strong style={{marginRight:"0px" }}>CATEGORIES <i class="fa fa-arrow-right" aria-hidden="true"></i> </strong> 
                            {categories.map((cat, i) => {
                                        return (                                          
                                            
                                            <span>
                                                &nbsp;                                        
                                                <input class="form-check-input" type="checkbox" name="categorie" value={cat.name}/>
                                                <label class="form-check-label" for="inlineCheckbox1"> {cat.name} </label> &nbsp;
                                            </span> 
                                            
                                               
                                        )
                                    })}                     
                            
                            </div>
                            <input type="text" class="form-control form-control-lg" name="image" placeholder="Url Imagen" id="image" onChange={handleInputChange} required=""/>
                            <input type="submit" class="submit-btn" value="Submit" />
                        </form>
                    </div>

                </div>
            </section>

        </div>
    );
};
