import React, {useState} from 'react';


 
export default function FormProduct({products}) { 

    const [input, setInput] = useState({
        name: '',
        description: '',
        price: '',
        stock: '',
        image: ''
      });

      const handleInputChange = function(e) {
        setInput({
          ...input,
          [e.target.name]: e.target.value
        });
      }

      const handleSubmit = function(e) {
        e.preventDefault();
      }

    function update(id, products) {
        var result = products.find((e) => {
            if (e.id == id) {
                document.getElementById("name").value = e.name;
                document.getElementById("description").value = e.description;
                document.getElementById("price").value = e.price;
                document.getElementById("stock").value = e.stock;
                document.getElementById("image").value = e.image;
                return e;
            }
        }) 
    }

    return (         
       
        <div className="container"> 

         
        <section class="contact-block"></section>
        
        {/* <section class="contact-block jumbotron">
            <div class="container">
                <div class="col-md-6 contact-form">
                    <h3>Send a <span>Message</span></h3>
                    <form action="#" method="post">
                        <input type="text" class="form-control" name="Name" placeholder="Name" required=""/>
                        <input type="email" class="form-control" name="Email" placeholder="Email" required=""/>
                    
                        <input type="submit" class="submit-btn" value="Submit"/>
                    </form>
                </div>
            </div>
        </section> */}
            <section class="contact-block jumbotron">
                <div class="container">
                    {/* <div class="col-md-6 contact-left-block">
                        <h3><span>Contact </span>Us</h3>
                        <p class="text-left">Nulla pharetra eleifend tellus in molestie. In vel neque sit amet urna gravida blandit nec id massa. Phasellus eu aliquet augue. Quisque fringilla urna quam.</p>
                        <p class="text-right">701 Old York Drive Richmond USA. <i class="fa fa-map-marker fa-lg"></i></p>
                        <p class="text-right"><a href="tel:+1-202-555-0100"> +1-202-555-0100 <i class="fa fa-phone fa-lg"></i></a></p>
                        <p class="text-right"><a href="mailto:demo@info.com"> demo@info.com <i class="fa fa-envelope"></i></a></p>
                    </div> */}
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
                            <button type="button" class="btn btn-success" key={i} onClick={() => update(p.id, products)}>
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
                            <input type="email" class="form-control form-control-lg" name="description" placeholder="Descripcion" id="description" onChange={handleInputChange} required=""/>
                            <input type="text" class="form-control form-control-lg" name="price" placeholder="$ Precio" id="price" onChange={handleInputChange} required=""/>
                            <input type="text" class="form-control form-control-lg" name="stock" placeholder="Cantidad" id="stock" onChange={handleInputChange} required=""/>
                            {/* <select class="form-control form-control-lg">
                            <option selected id="category" ></option>
                            </select> */}
                            <input type="text" class="form-control form-control-lg" name="image" placeholder="Url Imagen" id="image" onChange={handleInputChange} required=""/>
                            <input type="submit" class="submit-btn" value="Submit" />
                        </form>
                    </div>
                    
                </div>
            </section>

                 

                    

        
             


        </div>
    );
};
