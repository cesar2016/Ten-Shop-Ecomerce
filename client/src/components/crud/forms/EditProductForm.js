import React, { useState, useEffect } from 'react'
import {connect} from "react-redux";
import {updateProduct, getAllCategory} from '../../../actions/actions'

const EditProductForm = props => {
  const [ product, setProduct ] = useState(props.currentProduct)

  useEffect(
    () => {
      setProduct(props.currentProduct)
     props.getAllCategory()
    },
    [ ]
  )
  // You can tell React to skip applying an effect if certain values haven’t changed between re-renders. [ props ]

  const handleInputChange = event => {
    // const { name, value } = event.target

    setProduct({ ...product, [event.target.name]: event.target.value })
  }

  return (
    <form
      onSubmit={event => {
        event.preventDefault()

        props.updateProduct(product.id, product)
 
      }}
    >
      <label>Nombre</label>
      <input type="text" name="name" value={product.name} onChange={handleInputChange} />
      <label>Descripción</label>
      <input type="text" name="description" value={product.description} onChange={handleInputChange} />
      <label>Categoria</label>
      <select name='categoriaName'onChange={(e) => handleInputChange(e)}>
              {props.categories.map(categoria => <option>{categoria.name}</option>) }
      </select >


      <label>Precio</label>
      <input type="text" name="price" value={product.price} onChange={handleInputChange} />
      <label>Stock</label>
      <input type="text" name="stock" value={product.stock} onChange={handleInputChange} />
      <label>Imagen</label>
      <input type="text" name="image" value={product.image} onChange={handleInputChange} />
      
      <button>Actualizar producto</button>
      <button onClick={() => props.setEditing(false)} className="button muted-button">
        Cancelar
      </button>
    </form>
  )
}

// export default EditProductForm

function mapStateToProps(state) {
  return {
    ...state,
    categories: state.categories
  };
}                  


export default connect (mapStateToProps, {updateProduct, getAllCategory} )(EditProductForm);   