import React, {  useState } from "react";
import { connect } from "react-redux";
import {Link, NavLink} from 'react-router-dom';
import './Page404.css';
import {getSearchProducts} from "../actions/index";


function Notfound({getSearchProducts}) {
    const [inputSearch, setInputSearch] = useState("");

    function handleChange(e) {
        setInputSearch({
            inputSearch: e.target.value            
        });        
        getSearchProducts(inputSearch.inputSearch)
    };

    function handleSubmit(e) {
        e.preventDefault()
    }

      return(
 <div className="contenedor">

<div className="top">
  <h1>404</h1>
  <h3>Page Not Found</h3>
</div>
<div className="containera">
  <div className="ghost-copy">
    <div className="one"></div>
    <div className="two"></div>
    <div className="three"></div>
    <div className="four"></div>
  </div>
  <div className="ghost">
    <div className="face">
      <div className="eye"></div>
      <div className="eye-right"></div>
      <div className="mouth"></div>
    </div>
  </div>
  <div className="shadow"></div>
</div>
<div className="buscador">
  <p>Boo, looks like a ghost stole this page!</p>
    <div className="asd">                
                    <form class="form-inline" onSubmit={(e) => handleSubmit(e)}>
                        <input style={{fontSize:"15px"}} class="form-control " type="text" placeholder="Search to Product.." aria-label="Search" onChange={(e) => handleChange(e)}/>                        
                    <Link to="/search">
                        <button title="SEARCH" style={{fontSize:"15px"}} class="btn btn-secondary" type="submit"><i className="fa fa-search"></i></button>
                    </Link>
                    </form>
    </div>
  <div className="buttonsa">
    {/* <button className="btn btn-secondary btn-lg" >Back</button> */}
    <Link to="/">
    <button className="btn btn-secondary btn-lg" style={{marginLeft:"10px", height:"35px"}}> Go to Home !</button>
    </Link>
  </div>
</div>

</div>
      )
    
  }


  const mapDispatchToProps = dispatch => {
    return {
      getSearchProducts: (search) => dispatch(getSearchProducts(search))
    }
  }
  
  
  export default connect(null, mapDispatchToProps)(Notfound)