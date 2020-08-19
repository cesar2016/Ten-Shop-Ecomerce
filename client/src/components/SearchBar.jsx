import React, { Component, useState, useEffect } from "react";
import {Link, NavLink} from 'react-router-dom';
import { connect } from "react-redux";
import {getSearchProducts} from "../actions/index"

function SearchBar({ getSearchProducts }) {
    const [inputSearch, setInputSearch] = useState("");

    function handleChange(e) {
        setInputSearch({
            inputSearch: e.target.value            
        });        
    };

    function handleSubmit(e) {
        console.log("EL SUBMIT", inputSearch.inputSearch)
        e.preventDefault();
        getSearchProducts(inputSearch.inputSearch)

    };

    return (
        <div>

                <div className="input-group">
                {/* <form className="form-inline my-4 my-lg-6" onSubmit={(e) => handleSubmit(e)}>
                    <input className="form-control subscribe-box" type="search" placeholder="Buscar" aria-label="Search" onChange={(e) => handleChange(e)}/>
                    <button className="btn btn-danger my-2 my-sm-0" type="submit">
                  <span className="fa fa-search"></span>
                </button>
                    </form> */}
                    <form class="form-inline my-2 my-lg-0" onSubmit={(e) => handleSubmit(e)}>
                        <input style={{fontSize:"15px"}} class="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" onChange={(e) => handleChange(e)}/>
                        <button style={{fontSize:"15px"}} class="btn btn-info my-2 my-sm-0" type="submit"><i className="fa fa-search"></i></button>
                    </form>
                </div>

        </div>
    );
};

const mapDispatchToProps = dispatch => {
  return {
    getSearchProducts: (search) => dispatch(getSearchProducts(search))
  }
}


export default connect(null, mapDispatchToProps)(SearchBar)