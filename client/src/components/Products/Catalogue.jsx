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