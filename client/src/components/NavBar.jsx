import React, { useState } from "react"
import "./NavBar.css"
import SearchBar from "./SearchBar.jsx"


export default function NavBar({ handleSubmit, logo, funcionTraeDatos }) {
    return (
            <div>
            <div className="NavBar">
                <nav className="navbar navbar-expand-lg navbar-light bg-info fixed-top">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <a class="navbar-brand" href="#">
                      <img src={logo} width="30" height="30" class="d-inline-block align-top" alt=""/>

                    </a>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                    <a className="navbar-brand" href="#"></a>
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                      <li className="nav-item active">
                        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">Link</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">Disabled</a>
                      </li>
                    </ul>
                    <SearchBar funcionTraeDatos={funcionTraeDatos}/>
                    </div>
                    </nav>
            </div>

        </div>


        )
}
