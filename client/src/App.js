import React from 'react';
import { Route } from 'react-router-dom';


import './App.css';
import NavBar from "./components/NavBar"
import Product from "./components/Products/Product"
import FormProduct from "./components/formularios/FormProduct"
import Catalogue from "./components/Products/Catalogue"
import About from "./components/About"
import FormAddProduct from "./components/formularios/FormAddProduct"
import FormCategory from "./components/formularios/FormCategory"
import Contact from './components/Contact.jsx';
import SearchProduct from './components/Products/SearchProduct.jsx';
import MenuCategories from './components/Products/MenuCategories';
import SignUp from "./components/SignUp"
import SignIn from "./components/SignIn"
import Cart from './components/cart/Cart';
import FormAdmin from './components/formularios/FormAdmin';
import Orders from './components/formularios/FormAdmin';
//import Orders from './components/SliderImage';
import SliderImage from './components/SliderImage';
import Footer from './components/Footer'

function App() {

    return (
      <div className="App jumbotron bg-white">
          <Route path="/" render={() => <NavBar/> } />         
          <Route exact path="/" render={()=> <SliderImage/>} />
          <Route exact path="/" render={() => <Catalogue/> } />
          <Route exact path="/product/:id" render={({match}) => <Product id={match.params.id}/> } />
          <Route exact path="/formProduct" render={() => <FormProduct /> } />
          <Route exact path="/about" render={() => <About/> } />
          <Route exact path="/contact" render={() => <Contact/> } />
          <Route exact path="/formAddProduct" render={() => <FormAddProduct/> } />
          <Route exact path= "/formCategory" render={() => <FormCategory />} />
          <Route exact path="/search" render={() => <SearchProduct/> } />
          <Route exact path="/categories/:categories" render={({match}) => <MenuCategories category={match.params.categories}/> } />        
          <Route exact path="/signup" render={() => <SignUp/> } />
          <Route exact path="/signin" render = {() => <SignIn/>}/>
          <Route exact path="/cart" render={() => <Cart />} />
          <Route exact path="/orders" render={() => <Orders />} />
          <Route exact path="/admin" render={()=> <FormAdmin/>} />
          <Route path="/" render={() => <Footer/>} />
         
      </div>
      )

}

export default App;
