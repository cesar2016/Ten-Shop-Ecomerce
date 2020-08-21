import React, { useState, useRef, useEffect } from 'react';
import {connect} from 'react-redux';
import  {getAllCategories, addCategory, modifyCategory, deleteCategory} from '../../actions'


 function TableCategories({getAllCategories, category, update,  elId, deleteCategory,modifyCategory}) {
                            

    useEffect(()=>{
        getAllCategories()
         //modifyCategory()
         deleteCategory()
    },[])
   
    return (

        category.map((p, i) => {
            return (<tr>
            <th scope="row"> {p.name} </th>
            <td> {p.description} </td>
            <td>
            <button type="button" class="btn btn-success" onClick={() => {
                elId.current = p.name
             update(elId.current, category);
            }}>
            <i className="fa fa-pencil"></i>
            </button>
            &nbsp;
            <button type="button" class="btn btn-danger" onClick={(e) => deleteCategory(p.name)}>
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
        modifyCategory: (body,id) => dispatch(modifyCategory(body,id)),
        deleteCategory: (category) => dispatch(deleteCategory(category))  

    }
}

const mapStateToProps = state =>{
    return {
        category: state.categories
    }
}

 

export default connect (mapStateToProps, mapDispatchToProps)(TableCategories) 