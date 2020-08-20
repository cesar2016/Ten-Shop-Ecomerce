import React, { useState, useRef, useEffect } from 'react';
import Product from './Product';
import { connect } from "react-redux";
import { updateProduct, deleteCatxProd, deleteProduct, getCategoriesxProducts, getAllCategories, getAllProducts } from "../../actions"

function TableProducts({products, update, elId, deleteProduct, categxproducts, deleteCatxprod, getAllProducts}) {
    useEffect(() => {
      getAllCategories()
      getCategoriesxProducts()
      getAllProducts()      
    }, [])
        
  
    return (
        products.map((p, i) => {            

            return (<tr>
            <th scope="row"> {p.id} </th>
            <td> {p.name} </td>
            <td>
            {categxproducts.map((cxp, i) => {//Mapea las cat que tenga cada products               
                if(cxp.product_id === p.id){
                return (<button title="Clic for delete"  onClick={ (e) => deleteCatxprod(cxp.category, p.id)} type="button" class="btn btn-info">
                     { cxp.category}
                     </button>) 
                }
            })}       
            </td>
            <td>
            <button type="button" class="btn btn-success" onClick={() => {
            update(p.id, products);
            elId.current = p.id            
            }}>
            <i className="fa fa-pencil"></i>
            </button>
            &nbsp;
            <button type="button" class="btn btn-danger"  onClick={ (e) => deleteProduct(p.id)}>
            <i className="fa fa-trash"></i>
            </button>
            </td>
            </tr>)
        })
    )
}

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



export default connect(mapStateToProps, mapDispatchToProps)(TableProducts)