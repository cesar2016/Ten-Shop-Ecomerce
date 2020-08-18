import React, {useState} from 'react';
import axios from "axios"


export default function FormProduct({products, categories}) {

    const [input, setInput] = useState({
        name: '',
        description: '',
        price: '',
        stock: '',
        image: '',
        
         
      });

      const handleInputChange = function(e) {
        setInput({
          ...input,
          [e.target.name]: e.target.value
        });
      }

      const handleSubmit = function(e) {
        e.preventDefault();
        axios.post("http://localhost:3001/products/add", input)
      }

      var categ = []
      function addCat(select){
      // var op =  document.getElementById("op").value; 

      categ.push(select); 

       
      const result = categ.filter(word => word != select);
       
          return document.getElementById("contCat").innerHTML = "<p>"+result+"</p>" ;
          
       }



    return (

        <div className="container">
        <section class="contact-block"></section>
            <section class="contact-block jumbotron">
                <div class="container">
                    <div className="col-md-6 contact-form alert alert-dark">
                        <h3>Cargar  <span>Productos</span></h3>
                        <form action="#" method="post" onSubmit={handleSubmit}>
                            <input type="text" className="form-control form-control-lg" name="name" placeholder="Nombre" id="name" onChange={handleInputChange} required=""/>
                            <input type="text" className="form-control form-control-lg" name="description" placeholder="Descripcion" id="description" onChange={handleInputChange} required=""/>
                            <input type="text" className="form-control form-control-lg" name="price" placeholder="$ Precio" id="price" onChange={handleInputChange} required=""/>
                            <input type="text" className="form-control form-control-lg" name="stock" placeholder="Cantidad" id="stock" onChange={handleInputChange} required=""/>                            
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
