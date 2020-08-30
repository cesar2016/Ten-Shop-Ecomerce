import React from 'react';
import TarjetCatalogue from './TarjetCatalogue.jsx';
import { connect } from "react-redux";
import { getAllProducts, getAllCategories, onlineUserError, loginUserCookie } from "../../actions";
import Swal from 'sweetalert2'

function Catalogue({ products, getAllProducts, onlineUser, onlineUserError, loginUserCookie }) {      

  React.useEffect(() => {
    getAllProducts()
  }, [])
  var flag = false;  

  if (onlineUser === 1) {
    onlineUserError()
    Swal.fire({
            icon: 'error',
            title: 'Existing user. Try again',
            showConfirmButton: false,
            timer: 2500
          })    
  }
  if (onlineUser === 2) {
    onlineUserError()
    Swal.fire({
            icon: 'error',
            title: 'Oops... user or password invalid!',
            showConfirmButton: false,
            timer: 3000
          })        
  }  
    

    if(products){
      return (
        <div className='container' style={{marginTop: "40px"}}>
          {products.map(c => <TarjetCatalogue
              id={c.id}
              name={c.name}
              description={c.description}
              price={c.price}
              stock={c.stock}
              image={c.image}
            /> )}
        </div>
      );
    } else {
      return(
        <div>No products found.</div>
      )
    }
  }

const mapDispatchToProps = dispatch => {
  return {
    getAllProducts: () => dispatch(getAllProducts()),
    onlineUserError: () => dispatch(onlineUserError())
  }
}

const mapStateToProps = state => {
  return {
    products: state.all_products,
    onlineUser: state.onlineUser
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Catalogue)