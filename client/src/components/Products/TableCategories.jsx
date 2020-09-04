import React, { useEffect } from 'react';
import {connect} from 'react-redux';
import  {getAllCategories,  modifyCategory, deleteCategory} from '../../actions'


 function TableCategories({getAllCategories, category, update,  elId, deleteCategory}) {
                            

    useEffect(()=>{
        getAllCategories()
    },[])
   
    return (

                <section id="cart_items">
		<div class="container">
			<div class="table-responsive cart_info">
				<table class="table table-condensed">
					<thead>
						<tr class="cart_menu">
							<td class="price">Name</td>
                            <td class="quantity">Description</td>
							<td class="delete">Edit</td>
                            <td class="total">Delete</td>
						</tr>
					</thead>
					<tbody>
                        {
                    category.map((p, i) => {
                    return (
						<tr>
							<td class="cart_price">
								<p>{p.name}</p>
							</td>
                            <td class="cart_quantity">
								<p>{p.description}</p>
							</td>
							<td class="cart_total">
							<button type="button" class="btn btn-success" onClick={() => {
                                elId.current = p.name
                            update(elId.current, category);
                            }}>
                            <i class="fa fa-pencil"></i>
                            </button>
                            </td>
                            <td class="cart_total">
                            <button type="button" class="btn btn-danger" onClick={(e) => deleteCategory(p.name)}>
                            <i class="fa fa-pencil"></i>
                            </button>
							</td>
						</tr>
                        )
                        })}
						
					</tbody>
				</table>
			</div>
		</div>
	</section> 
    
           
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