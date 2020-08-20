import React, {useState, useEffect} from 'react';
import axios from "axios"
import { connect } from "react-redux";
import { getAllProducts, getAllCategories } from "../../actions"


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
        image: '',
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
        let objetoo = {
          name: input.name,
          description: input.description,
          price: input.price,
          stock: input.stock,
          image: input.image,
          category: categ 
        }
        
        e.preventDefault();
        axios.post("http://localhost:3001/products/add", objetoo)
      }

      
      function addCat(select){
        //console.log(categ.includes(select))
        if(categ.includes(select)){
          categ = categ.filter(word => word !== select);        
           console.log(categ,"if true")
          return document.getElementById("contCat").innerHTML = "<p>"+categ+"</p>" ;
        }else{
          categ.push(select); 
          console.log(categ,"if false")
          return document.getElementById("contCat").innerHTML = "<p>"+categ+"</p>" ;
        }          
      }



    return (

        <div className="container">
        <section class="contact-block"></section>
            <section class="contact-block jumbotron">
                <div class="container">
                    <div className="col-md-6 contact-form alert alert-dark">
                        <h3>Add  <span>Products</span></h3>
                        <form action="#" method="post" onSubmit={handleSubmit}>
                            <input type="text" className="form-control form-control-lg" name="name" placeholder="Name" id="name" onChange={handleInputChange} required=""/>
                            <input type="text" className="form-control form-control-lg" name="description" placeholder="Description" id="description" onChange={handleInputChange} required=""/>
                            <input type="text" className="form-control form-control-lg" name="price" placeholder="Price $ " id="price" onChange={handleInputChange} required=""/>
                            <input type="text" className="form-control form-control-lg" name="stock" placeholder="Stock" id="stock" onChange={handleInputChange} required=""/>                            
                            <input type="text" className="form-control form-control-lg" name="image" placeholder="Url Imagen" id="image" onChange={handleInputChange} required=""/>
                            
                            <div className=" form-control-lg">
                                    {categories.map((cat, i) => {
                                        return (                                           
                                          <button type="button" class="btn btn-primary"  onClick={(e) => addCat(cat.name)} id="op" value={cat.name}>
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