import React from 'react';


 
export default function FormProduct() { 

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
                        <h3>Administracion  <span>Productos</span></h3>
                        <form action="#" method="post">
                            <input type="text" class="form-control form-control-lg" name="Email" placeholder="id" disabled required=""/>   
                            <input type="text" class="form-control form-control-lg" name="Name" placeholder="Nombre" required=""/>
                            <input type="email" class="form-control form-control-lg" name="Email" placeholder="Descripcion" required=""/>
                            <input type="text" class="form-control form-control-lg" name="Name" placeholder="$ Precio" required=""/>
                            <input type="text" class="form-control form-control-lg" name="Email" placeholder="Cantidad" required=""/>
                            <select class="form-control form-control-lg">
                            <option selected >CATEGORIA</option>
                            <option>...</option>
                            </select>
                            <div class="custom-file">
                            <input type="file" class="custom-file-input form-control form-control-lg"   lang="es"/>
                            <label class="custom-file-label " for="customFileLang">Cargar Imagen <i class="fa fa-image"></i> </label>
                            </div>
                            <input type="submit" class="submit-btn" value="Submit"/>
                        </form>
                    </div>
                    <div class="clearfix"></div>
                </div>
            </section>

                 

                    

        
             


        </div>
    );
};
