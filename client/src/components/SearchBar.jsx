import React, { Component, useState } from "react";

export default function SearchBar({ funcionTraeDatos, products }) {
    const [inputSearch, setInputSearch] = useState("");

    function handleChange(e) {
        setInputSearch({
            inputSearch: e.target.value
        });
    };
    function handleSubmit(e) {
        e.preventDefault();
        console.log("QUE TIENE EL PRODUCTS", products)
        products = funcionTraeDatos(inputSearch.inputSearch)
        console.log("QUE TIENE EL PRODUCTS DESPUES", products)

    };

    return (
        <div>
            <form className="form-inline my-2 my-lg-0" onSubmit={(e) => handleSubmit(e)}>
              <input className="form-control mr-sm-2" type="search" placeholder="..." aria-label="Search" onChange={(e) => handleChange(e)}/>
              <button className="btn btn-success my-2 my-sm-0" type="submit">Buscar</button>
            </form>
        </div>
    );
};
