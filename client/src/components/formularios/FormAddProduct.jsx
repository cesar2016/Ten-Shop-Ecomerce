import React, {useState} from 'react';
import axios from "axios"


export default function FormProduct({products}) {

    const [input, setInput] = useState({
        name: '',
        description: '',
        price: '',
        stock: '',
        image: ''
      });
      const [value, setValue] = useState([])

      const handleInputChange = function(e) {
        setInput({
          ...input,
          [e.target.name]: e.target.value
        });
      }

      const handleSubmit = function(e) {
        e.preventDefault();
        axios.post("http://localhost:3001/products/add", input);
        console.log("asdasd",value)
        setValue([])

      }

      const handleChange=function(event) {
        setValue(value.concat(event.target.value));
        
      }

    return (

        <div className="container">


        <section class="contact-block"></section>
            <section class="contact-block jumbotron">
                <div class="container">
                    <div className="col-md-12 contact-form alert alert-dark">
                        <h3>Cargar  <span>Productos</span></h3>
                        <form action="#" method="post" onSubmit={handleSubmit}>

                            <input type="text" className="form-control form-control-lg" name="name" placeholder="Nombre" id="name" onChange={handleInputChange} required=""/>
                            <input type="text" className="form-control form-control-lg" name="description" placeholder="Descripcion" id="description" onChange={handleInputChange} required=""/>
                            <input type="text" className="form-control form-control-lg" name="price" placeholder="$ Precio" id="price" onChange={handleInputChange} required=""/>
                            <input type="text" className="form-control form-control-lg" name="stock" placeholder="Cantidad" id="stock" onChange={handleInputChange} required=""/>
                            <input type="text" className="form-control form-control-lg" name="image" placeholder="Url Imagen" id="image" onChange={handleInputChange} required=""/>
                            <input type="submit" className="submit-btn" value="Submit" style={{borderRadius:"10px"}}/>
                            
                           
                            <select onChange={handleChange} >
                              <option value="Heladeras">Heladeras</option>
                              <option value="Notebooks">Notebooks</option>
                              <option selected value="Televisores">Televisores</option>
                              <option value="Celulares">Celulares</option>
                            </select>
                        </form>
                    </div>

                </div>
            </section>
        </div>
    );
};

