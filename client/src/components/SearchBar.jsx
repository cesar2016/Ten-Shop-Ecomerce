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
        getSearchProducts(inputSearch.inputSearch)
    };
    function handleSubmit(e) {
        e.preventDefault()
    }


    return (
        <div>

                <div className="input-group">                
                    <form class="form-inline my-2 my-lg-0" onSubmit={(e) => handleSubmit(e)}>
                        <input style={{fontSize:"15px"}} class="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" onChange={(e) => handleChange(e)}/>                        
                    <Link to="/search">
                        <button title="SEARCH" style={{fontSize:"15px"}} class="btn btn-light my-2 my-sm-0" type="submit"><i className="fa fa-search"></i></button>
                    </Link>
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