import React from 'react';


 
export default function FormProduct() { 

    return (         
       
        <div className="container"> 

        <h1>... PRODUCTOS ...</h1>

        <div className="row alert alert-info">
            <form>
                <div class="form-row">
                    <div class="form-group col-md-6">
                    <label for="inputEmail4"><strong>NOMBRE DEL PRODUCTO</strong></label>
                    <input type="text" class="form-control" id="product" placeholder="..."/>
                    </div>
                    <div class="form-group col-md-6">
                    <label for="inputPassword4"><strong>CATEGORIA</strong></label>
                    <select id="category" class="form-control">
                        <option selected>Elegir Categoria</option>
                        <option>...</option>
                    </select>
                    </div>
                </div>                
                <div class="form-group">
                    <label for="inputAddress2"><strong>DESCRIPCION</strong></label>
                    <input type="text" class="form-control" id="description" placeholder="..."/>
                </div>
                <div class="form-row">
                <div class="form-group">
                    <label for="exampleFormControlFile1"><strong>IMAGEN DEL PRODUCTO</strong></label>
                    <input type="file" class="form-control-file" id="image"/>
                </div>
                    <div class="form-group col-md-4">
                    <label for="inputState"><strong>PRECIO $</strong></label>
                    <input type="text" class="form-control" id="price" placeholder="$ ..."/>
                    </div>
                    
                </div>
                <div class="form-group">
                    {/* <div class="form-check">
                    <input class="form-check-input" type="checkbox" id="gridCheck"/>
                    <label class="form-check-label" for="gridCheck">
                        Check me out
                    </label>
                    </div> */}
                </div>
                <button type="button" class="btn btn-primary btn-lg btn-block">ENVIAR</button>
            </form> 
        </div>

        
             


        </div>
    );
};
