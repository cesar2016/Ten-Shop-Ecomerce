import React from 'react';
import TarjetCatalogue from './TarjetCatalogue.jsx';
import { connect } from "react-redux";
import { getAllProducts, getAllCategories } from "../../actions"

function Catalogue({ products, getAllProducts }) {      

  React.useEffect(() => {
    getAllProducts()
  }, [])

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
    getAllProducts: () => dispatch(getAllProducts())  
  }
}

const mapStateToProps = state => {
  return {
    products: state.all_products
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Catalogue)