import React, { Component } from "react";
import { connect } from "react-redux";
// import './categories.css';
import {addProduct, getAllCategory}  from '../../../actions/actions'

class AddProductForm extends Component {
  constructor(props) {
    super(props);
    this.state = 
    { name: '', 
      description: '', 
      categoriaName: '',
      price: '', 
      stock: '', 
      image: '' };

  }

  componentDidMount () {
     this.props.getAllCategory()

  }

  handleChange(event) {
    this.setState({ 
      [event.target.name]: event.target.value 

    });
  }

  handleSubmit(event) {
    event.preventDefault()  
    this.props.addProduct(this.state); 
    console.log(this.state)
  }                           

  render() {
    const {name ,description, price, stock } = this.state;
    return (
      <div className='AddProduct'>
        <form  onSubmit={(e) => this.handleSubmit(e)}>
              <div>
                <label>Name </label>
                  <input
                    type="text"
                    name="name"
                    // value={name}
                    onChange={(e) => this.handleChange(e)}
                  />
                  <label>Descripcion </label>
                    <input
                    type="text"
                    name="description"
                    // value={description}
                    onChange={(e) => this.handleChange(e)}
                  />
                   <label>Price </label>
                   <input
                    type="text"
                    name="price"
                    // value={price}
                    onChange={(e) => this.handleChange(e)}
                  />
                  <label>Stock </label>
                  <input
                    type="text"
                    name="stock"
                    // value={stock}
                    onChange={(e) => this.handleChange(e)}
                  />
                      {/* <input
                    type="text"
                    name="image"
                    value={image}
                    onChange={(e) => this.handleChange(e)}
                  /> */}
                    <label>Categorias </label>
                    <select name='categoriaName' onChange={(e) => this.handleChange(e)}>
                      <option > Seleccionar </option> 
                      {/* Sacar el option de Seleccionar para que no se agregue como categoria*/}
                      {this.props.categories.length > 0 && this.props.categories.map(categoria => <option > {categoria.name} </option>) }
                    </select >
                  <button type="submit">Agregar</button> 
              </div>
        </form>
      </div>
    );
  }
}


  function mapStateToProps(state) {
    return {
      ...state,
      categories: state.categories
    };
  }                
  

export default connect(mapStateToProps, { addProduct, getAllCategory } )(AddProductForm);        