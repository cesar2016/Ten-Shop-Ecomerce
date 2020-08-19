import React from 'react';
import TarjetCatalogue from './TarjetCatalogue.jsx';
import { connect } from "react-redux";
import { getAllProducts, getAllCategories } from "../../actions"

function Catalogue({ products, getAllProducts, getAllCategories }) {      

  React.useEffect(() => {
    getAllProducts()
  }, [])
    console.log("LOS PRODUCTOS", products)

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
        <div>Sin Productos</div>
      )
    }
  }

const mapDispatchToProps = dispatch => {
  return {
    getAllProducts: () => dispatch(getAllProducts()),
    getAllCategories: () => dispatch(getAllCategories())
  }
}

const mapStateToProps = state => {
  return {
    products: state.all_products
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Catalogue)