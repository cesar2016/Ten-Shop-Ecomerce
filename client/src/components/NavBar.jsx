import React, { useState } from "react"
import "./NavBar.css"
import SearchBar from "./SearchBar.jsx"
import { Link } from "react-router-dom";


export default function NavBar({ funcionTraeDatos, logo }) {
    return (
            <div className="jumbotron fixed-top">


            <header className="header-container">

                        <nav className="navbar navbar-expand-lg navbar-light  fixed-top">
                            <div className="col-md-2 col-sm-6 col-xs-6">
                                <div id="logo">
                                    <a href="index.html"><span>Ten</span>/ Shop</a>
                                </div>
                            </div>
                            <div className="col-sm-6 visible-sm">
                                <div className="text-right"><button type="button" className="book-now-btn">Book Now</button></div>
                            </div>
                            <div className="col-md-8 col-sm-12 col-xs-12 remove-padd">
                                <nav className="navbar navbar-default">
                                    <div className="navbar-header page-scroll">
                                        <button data-target=".navbar-ex1-collapse" data-toggle="collapse" className="navbar-toggle" type="button">
                                            <span className="sr-only">Toggle navigation</span>
                                            <span className="icon-bar"></span>
                                            <span className="icon-bar"></span>
                                            <span className="icon-bar"></span>
                                        </button>

                                    </div>
                                    <div className="collapse navigation navbar-collapse navbar-ex1-collapse remove-space">
                                        <ul className="list-unstyled nav1 cl-effect-10">
                                        <Link to="/">
                                            <li><a  data-hover="Home" className="active"><span>Home</span></a></li>
                                        </Link>
                                        <Link to="/about">
                                            <li><a data-hover="About"><span>About</span></a></li>
                                        </Link>
                                        <Link to="/#">
                                            <li><a data-hover="Rooms" ><span>Category</span></a></li>
                                        </Link>
                                        <Link to="/#">
                                            <li><a data-hover="Gallery" ><span>Gallery</span></a></li>
                                        </Link>
                                        <Link to="/#">
                                            <li><a data-hover="Dinning" ><span>Dinning</span></a></li>
                                        </Link>
                                        <Link to="/#">
                                            <li><a data-hover="News" ><span>News</span></a></li>
                                        </Link>
                                        <Link to="/contact">
                                            <li><a data-hover="Contact Us"><span>contact Us</span></a></li>
                                        </Link>
                                        </ul>


                                    </div>
                                </nav>
                            </div>
                            <SearchBar funcionTraeDatos={funcionTraeDatos}/>

                        </nav>


            </header>

        </div>


        )
}
