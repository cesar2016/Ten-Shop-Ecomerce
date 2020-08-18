import React, { useState, useRef, useEffect } from 'react';



export default function render({products, update, elId, deleteProduct}) {
     
    
    return (

        products.map((p, i) => {
            console.log("asdasdasdasd",p)
            return (<tr>
            <th scope="row"> {p.id} </th>
            <td> {p.name} </td>
            <td>
            <button type="button" class="btn btn-success" onClick={() => {
            update(p.id, products);
            elId.current = p.id
            }}>
            <i className="fa fa-pencil"></i>
            </button>
            &nbsp;
            <button type="button" class="btn btn-danger" onClick={(e) => deleteProduct(p.id)}>
            <i className="fa fa-trash"></i>
            </button>
            </td>
            </tr>)
        })
    )
}