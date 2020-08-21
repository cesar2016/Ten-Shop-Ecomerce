import React, { useState, useRef, useEffect } from 'react';
import {connect} from 'react-redux';
import  {getAllCategories, addCategory, modifyCategory, deleteCategory} from '../../actions'


 function TableCategories({getAllCategories, category, update, categories, elId, deleteCategory }) {
                            

    useEffect(()=>{
        getAllCategories()
        // addCategory()
        // modifyCategory()
         deleteCategory()
    },[])
    function deleted (cat){
        console.log("se essta ejecutando")
        deleteCategory(cat)
    }
    return (

        category.map((p, i) => {
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
            <button type="button" class="btn btn-danger" onClick={(e) => deleted(p.name)}>
            <i className="fa fa-trash"></i>
            </button>
            </td>
            </tr>)
        })
    )
}

const mapDispatchToProps = dispatch =>{

    return {
        getAllCategories: () => dispatch(getAllCategories),
        // addCategory: () => dispatch(addCategory),
        // modifyCategory: () => dispatch(modifyCategory),
         deleteCategory: (category) => dispatch(deleteCategory(category))  

    }
}

const mapStateToProps = state =>{
    return {
        category: state.categories
    }
}

 

export default connect (mapStateToProps, mapDispatchToProps)(TableCategories) 