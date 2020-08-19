import React, { useState, useRef, useEffect } from 'react';
import Product from './Product';



export default function render({products, update, elId, deleteProduct, categxproducts, deleteCatxprod}) {
        
        
  
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