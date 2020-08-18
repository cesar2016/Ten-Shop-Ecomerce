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

      function mostraC(e){

        e.preventDefault();         

        var a =document.getElementById("a").value;
        var b =  document.getElementById("b").value;
        var c = document.getElementById("c").value;
        var d = document.getElementById("d").value;


         
          // alert(a);
          // alert(b);
          // alert(c);
          // alert(d);
        

        //var array=[];

        
        //array.push(a,b,c,d);



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
                            <div class="form-check form-check-inline form-control-lg">
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
                            <input type="submit" className="submit-btn" value="Submit" style={{borderRadius:"10px"}}/>
                        </form>
                    </div>

                </div>
            </section>

            
            <section class="contact-block jumbotron">

             
            {/* <form  onSubmit={mostraC}>          
            
           <input type="radio" id="a" value="A"/>A
              <input type="radio" id="b" value="B"   />B
              <input type="radio" id="c" value="C"  />C 
              <input type="radio" id="d" value="D"  />D
              <input type="submit" value="Enviar"/>
              </form> */}

              


                
            </section>







        </div>



    );
};
