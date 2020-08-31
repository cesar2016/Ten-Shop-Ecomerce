import React, { useState, useRef, useEffect } from 'react';
import {connect} from 'react-redux';
import  {getAllCategories, addCategory, modifyCategory, deleteCategory} from '../../actions'
import Swal from 'sweetalert2'; 

 function TableCategories({getAllCategories, category, update,  elId, deleteCategory, modifyCategory}) {
                            

    useEffect(()=>{
        getAllCategories()
    },[])
    function deleteCat(name) {
     Swal.fire({ title: 'Are you sure?', text: "You won't be able to revert this!", icon: 'warning', showCancelButton: true, confirmButtonColor: '#3085d6', cancelButtonColor: '#d33', confirmButtonText: 'Yes, delete it!' })
     .then((result) => { 
         if (result.value) {
						document.getElementById('${name}')
						deleteCategory(name)
						Swal.fire( 'Deleted!', 'Your file has been deleted.', 'success' ) } }) 
					}



    return (

        category.map((p, i) => {
            console.log(category)
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
            <button type="button" class="btn btn-danger" onClick={(e) => deleteCat(p.name)}>
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