import React, {useState, useEffect} from 'react';
import axios from "axios"
import { connect } from "react-redux";
import { getAllProducts, getAllCategories } from "../../actions"
import FileBase64 from "react-file-base64"; // npm install react-file-base64
import Swal from 'sweetalert2'


function FormAddProduct({products, categories, getAllCategories, getAllProducts}) {
    useEffect(() => {
      getAllCategories()      
      getAllProducts()      
    }, [])

    const [input, setInput] = useState({
        name: '',
        description: '',
        price: '',
        stock: '',        
        category: []
        
         
      });

     
      const handleInputChange = function(e) {
        setInput({
          ...input,
          [e.target.name]: e.target.value
        });
      }
      var categ = [];
      
      const handleSubmit = function(e) { 
        e.preventDefault();               
        let objetoo = {
          name: input.name,
          description: input.description,
          price: parseFloat(input.price),
          stock: parseFloat(input.stock),
          image: input.image,
          category: categ 
        }

         
        if (products.length) {   
          
          
          for (let i = 0; i < products.length; i++) {
            const element = products[i].name;

            
            if(element === objetoo.name){

              Swal.fire({
                title: 'Ups!',
                text: "This product already exists, do you want to edit it?",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                //confirmButtonText: 'Yes, delete it!'
              }).then((result) => {
                if (result.value) {
                  window.location = "http://localhost:3000/formProduct"
                }
              })

              return 
            }///end if
            
          }//end for
        }

        Swal.fire(
          'Good job!',
          'The product was inserted successfully!',
          'success'
        )
        document.getElementById("myForm").reset();
        categories.forEach((x, i) => {
          var boton = document.getElementById(`${i}`);
          boton.className = 'btn btn-secondary';
        })
        document.getElementById("contCat").innerHTML = "";
        e.preventDefault();
        
        return axios.post("http://localhost:3001/products/add", objetoo)
      }

      
      function addCat(select, btnId){
        //console.log(categ.includes(select))
        //alert(btnId)
         
        if(categ.includes(select)){
          categ = categ.filter(word => word !== select); 
          console.log(categ,"if true")          
          document.getElementById(btnId).className = 'btn btn-secondary';          
           
        }else{
          categ.push(select); 
          console.log(categ,"if false")          
          document.getElementById(btnId).className = 'btn btn-success';
        }          
      }

      const handlerImageUpload = file => {
        setInput({...input, image: file.base64})
      }

    return (

        <div className="container">
        <section class="contact-block"></section>
            <section class="contact-block jumbotron">
                <div class="container">
                    <div className="col-md-6 contact-form alert alert-dark">
                        <h3>Add  <span>Products</span></h3>
                        <form action="#" method="post" onSubmit={handleSubmit} id="myForm">
                            <input type="text" className="form-control form-control-lg" name="name" placeholder="Name" id="name" onChange={handleInputChange} required=""/>
                            <input type="text" className="form-control form-control-lg" name="description" placeholder="Description" id="description" onChange={handleInputChange} required=""/>
                            <input type="text" className="form-control form-control-lg" name="price" placeholder="Price $ " id="price" onChange={handleInputChange} required=""/>
                            <input type="text" className="form-control form-control-lg" name="stock" placeholder="Stock" id="stock" onChange={handleInputChange} required=""/>                                   
                            <FileBase64 onDone={handlerImageUpload} />
                            <div className=" form-control-lg">
                                    {categories.map((cat, i) => {                                      
                                        return (                                           
                                          <button type="button" class="btn btn-secondary" id={`${i}`}  onClick={(e) => addCat(cat.name, i)} value={cat.name}>
                                            {cat.name}
                                          </button>                                          
                                        )
                                    })}      
                            </div>
                            <div className=" form-control-lg"> 
                              <span id='contCat'></span>
                            </div>   
                            <input type="submit" className="submit-btn" value="Submit" style={{borderRadius:"10px"}}/>
                        </form>
                    </div>

                </div>
            </section>

            
        </div>



    );
};

const mapDispatchToProps = dispatch => {
  return {    
    getAllCategories: () => dispatch(getAllCategories()),
    getAllProducts: () => dispatch(getAllProducts())

  }
}

const mapStateToProps = state => {
  return {
    products: state.all_products,
    categories: state.categories
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(FormAddProduct)