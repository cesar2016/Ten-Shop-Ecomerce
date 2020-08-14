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
            {/* <form className="form-inline my-2 my-lg-0" onSubmit={(e) => handleSubmit(e)}>
              <input className="form-control subscribe-box" type="search" placeholder="Buscar" aria-label="Search" onChange={(e) => handleChange(e)}/>
              <button className="btn btn-success my-2 my-sm-0" type="submit">Buscar</button>
            </form> */}

                {/* <div class="input-group" id="subscribe">
                    <input type="text" class="form-control subscribe-box" value="" name="subscribe" placeholder="Buscar"/>
                    <span class="input-group-btn">
                        <button type="button" class="btn subscribe-button"><i class="fa fa-paper-plane fa-lg"></i></button>
                    </span>
                </div> */}
                
                <div class="input-group">
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
