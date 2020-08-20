import React, { useState, useRef, useEffect } from 'react';
import TableProducts from "../Products/TableProducts"
import axios from "axios";
import { connect } from "react-redux";
import { updateProduct, deleteCatxProd, deleteProduct, getCategoriesxProducts, getAllCategories, getAllProducts } from "../../actions"


function FormProduct({products, categories, categxproducts, deleteProduct, deleteCatxProd, updateProduct, getCategoriesxProducts, getAllCategories, getAllProducts}) {
    useEffect(() => {
      getAllCategories()
      getCategoriesxProducts()
      getAllProducts()      
    }, [])

    console.log("LAS CATEGORIAS", categories)
    const [input, setInput] = useState({});
   
    

      const handleInputChange = function(e) {
        setInput({
          ...input,
          [e.target.name]: e.target.value
        });
 
      }

      var categ = [];

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
      e.preventDefault();
      
      let objetoo = {
        name: input.name,
        description: input.description,
        price: input.price,
        stock: input.stock,
        image: input.image,
        category: categ 
      }
      updateProduct(elId.current, objetoo)
    }

    function deleteProductxId(id) {   
        var opcion = window.confirm("Desea eliminar este Articulo");
        if (opcion == true) {
            deleteProduct(id)           
            window.location = 'http://localhost:3000/formProduct'
            alert('Delete success Product')
        } 
    }
    

    function deleteCatxprod(nameCxp, idProd){

     //console.log('NAME y el ID PROD', nameCxp + idProd)

      var opcion = window.confirm("Desea eliminar este Articulo");
        if (opcion == true) {            
            deleteCatxProd(nameCxp, idProd)
            window.location = 'http://localhost:3000/formProduct'
            alert('Delete success Category')
        }       

    }    

   
    function addCat(select){//inser categorias al array y eliminar      

        if(categ.includes(select)){
          categ = categ.filter(word => word !== select);                 
          return document.getElementById("contCat").innerHTML = "<p>"+categ+"</p>" ;
          }else{
            categ.push(select);              
            return document.getElementById("contCat").innerHTML = "<p>"+categ+"</p>" ;
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
                                    <th scope="col">Name</th>
                                    <th scope="col">Categories</th>
                                    <th scope="col">Edit</th>

                                </tr>
                             </thead>

                            <tbody >
                                <TableProducts update={update} elId={elId} deleteProductxId={deleteProductxId} categxproducts={categxproducts} deleteCatxprod={deleteCatxprod}/>
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
                            <div className=" form-control-lg">
                                    {categories && categories.map((cat, i) => {
                                        return (                                           
                                          <button type="button" class="btn btn-primary" onClick={(e) => addCat(cat.name)} id="op" value={cat.name}>
                                            {cat.name}
                                          </button>                                          
                                        )
                                    })}      
                            </div>
                            <div className=" form-control-lg"> 
                              <span id='contCat'></span>
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

const mapDispatchToProps = dispatch => {
  return {
    updateProduct: (id, body) => dispatch(updateProduct(id, body)),
    deleteCatxProd: (name, id) => dispatch(deleteCatxProd(name, id)),
    deleteProduct: (id) => dispatch(deleteProduct(id)),
    getCategoriesxProducts: () => dispatch(getCategoriesxProducts()),
    getAllCategories: () => dispatch(getAllCategories()),
    getAllProducts: () => dispatch(getAllProducts())

  }
}

const mapStateToProps = state => {
  return {
    categxproducts: state.categores_x_products,
    products: state.all_products,
    categories: state.categories
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(FormProduct)