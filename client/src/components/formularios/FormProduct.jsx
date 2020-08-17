import React, { useState, useRef } from 'react';
import axios from "axios";



export default function FormProduct({products}) {

    const [input, setInput] = useState({});

      const handleInputChange = function(e) {
        setInput({
          ...input,
          [e.target.name]: e.target.value
        });
      }


    var elId = useRef(null)

    function update(id, products) {
      products.find((e) => {
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
      e.preventDefault();
      axios.post(`http://localhost:3001/products/edit/${elId.current}`, input)        
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
                        {products.map((p, i) => {
                            return (<tr>
                            <th scope="row"> {p.id} </th>
                            <td> {p.name} </td>
                            <td>
                            <button type="button" class="btn btn-success" onClick={() => {
                              update(p.id, products);
                              elId.current = p.id
                            }}>
                            <i className="fa fa-pencil"></i>
                            </button>
                            </td>
                            </tr>)
                        })}
                    </tbody>

                </table>
                    </div>

                    <div class="col-md-6 contact-form alert alert-dark">
                        <h3>Administracion  <span>Productos</span></h3>
                        <form action="#" method="post" onSubmit={handleSubmit}>

                            <input type="text" class="form-control form-control-lg" name="name" placeholder="Nombre" id="name" onChange={handleInputChange} required=""/>
                            <input type="text" class="form-control form-control-lg" name="description" placeholder="Descripcion" id="description" onChange={handleInputChange} required=""/>
                            <input type="text" class="form-control form-control-lg" name="price" placeholder="$ Precio" id="price" onChange={handleInputChange} required=""/>
                            <input type="text" class="form-control form-control-lg" name="stock" placeholder="Cantidad" id="stock" onChange={handleInputChange} required=""/>
                            <input type="file" class="form-control form-control-lg" name="image" placeholder="Url Imagen" id="image" onChange={handleInputChange} required=""/>
                            <input type="submit" class="submit-btn" value="Submit" />
                        </form>
                    </div>

                </div>
            </section>









        </div>
    );
};
