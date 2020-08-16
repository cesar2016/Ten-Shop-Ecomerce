import React, { Component, useState, useEffect } from "react";
import {Link, NavLink} from 'react-router-dom'

export default function SearchBar({ funcionTraeDatos }) {
    const [inputSearch, setInputSearch] = useState("");

    function handleChange(e) {
        setInputSearch({
            inputSearch: e.target.value
        });
        console.log("INPUT", inputSearch)
    };

    function handleSubmit(e) {
      console.log("HANDLE", inputSearch)
      e.preventDefault();
      funcionTraeDatos(inputSearch.inputSearch)
    }

    return (
      <div>
              <div className="input-group">
              <form className="form-inline my-4 my-lg-6" onSubmit={(e) => handleSubmit(e)}>
                  <input className="form-control subscribe-box" type="search" placeholder="Buscar" aria-label="Search" onChange={(e) => handleChange(e)}/>
              <NavLink to={"/search"}>
                  <button className="btn btn-danger my-2 my-sm-0" type="submit">
                    <span className="fa fa-search"></span>
                  </button>
              </NavLink>
          </form>
              </div>
      </div>

    );
};
