import React, { Component, useState } from "react";

export default function SearchBar({ handleSubmit }) {
    const [inputSearch, setInputSearch] = useState("");

    function handleChange(e) {
        setInputSearch({
            inputSearch: e.target.value
        });
    };

    return (
        <div>
            <form className="form-inline my-2 my-lg-0" onSubmit={(e) => handleSubmit(e)}>
              <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" onChange={(e) => handleChange(e)}/>
              <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
        </div>
    );
};
