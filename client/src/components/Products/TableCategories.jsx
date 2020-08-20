import React, { useState, useRef, useEffect } from 'react';
import {connect} from 'react-redux';
import  {getAllCategories, addCategory, modifyCategory, deleteCategory} from '../../actions'


 function TableCategories({getAllCategories, category, update, categories, elId, deleteCategories }) {
                            

    
    return (

        categories.map((p, i) => {
            console.log("asdasdasdasd",p)
            return (<tr>
            <th scope="row"> {p.name} </th>
            <td> {p.description} </td>
            <td>
            <button type="button" class="btn btn-success" onClick={() => {
             update(p.name, categories);
             elId.current = p.name
            }}>
            <i className="fa fa-pencil"></i>
            </button>
            &nbsp;
            <button type="button" class="btn btn-danger" onClick={(e) => deleteCategories(p.name)}>
            <i className="fa fa-trash"></i>
            </button>
            </td>
            </tr>)
        })
    )
}

const mapDispatchToProps = dispatch =>{

    return {
        getAllCategories: () => dispatch(getAllCategories)
        // addCategory: () => dispatch(addCategory),
        // modifyCategory: () => dispatch(modifyCategory),
        // deleteCategory: () => dispatch(deleteCategory)  

    }
}

const mapStateToProps = state =>{

    return {

        category: state.categories
    }
}

 

export default connect (mapStateToProps, mapDispatchToProps)(TableCategories) 