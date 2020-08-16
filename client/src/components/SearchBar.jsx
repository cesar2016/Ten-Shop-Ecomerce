import React, { Component, useState, useEffect } from "react";
import {Link, NavLink} from 'react-router-dom'

export default function SearchBar({ funcionTraeDatos }) {
    const [inputSearch, setInputSearch] = useState("");

    function handleChange(e) {
        setInputSearch({
            inputSearch: e.target.value            
        });
    };

    function handleSubmit(e) {
        e.preventDefault();


            funcionTraeDatos(inputSearch.inputSearch)

    };

    return (
        <div>

                <div className="input-group">
                <form className="form-inline my-4 my-lg-6" onSubmit={(e) => handleSubmit(e)}>
                    <input className="form-control subscribe-box" type="search" placeholder="Buscar" aria-label="Search" onChange={(e) => handleChange(e)}/>
                    <button className="btn btn-danger my-2 my-sm-0" type="submit">
                  <span className="fa fa-search"></span>
                </button>
            </form>
                </div>

        </div>
    );
};
