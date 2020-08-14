import React, { useState } from "react"
import "./NavBar.css"
import SearchBar from "./SearchBar.jsx"
//port indent from "../../public/style/images/logo."


export default function NavBar({ handleSubmit, logo }) {
    return (
            <div className="container">
           

            
            <header class="header-container">                
                    
                        <nav class="navbar navbar-expand-lg navbar-light  fixed-top">
                            <div class="col-md-2 col-sm-6 col-xs-6">
                                <div id="logo">
                                     {/* <a href="index.html"><img src="style/images/logo.png"/></a>  */}
                                    <a href="index.html"><span>Ten</span>/ Shop</a>                                     
                                </div>                       
                            </div>
                            <div class="col-sm-6 visible-sm">
                                <div class="text-right"><button type="button" class="book-now-btn">Book Now</button></div>
                            </div>
                            <div class="col-md-8 col-sm-12 col-xs-12 remove-padd">
                                <nav class="navbar navbar-default">
                                    <div class="navbar-header page-scroll">
                                        <button data-target=".navbar-ex1-collapse" data-toggle="collapse" class="navbar-toggle" type="button">
                                            <span class="sr-only">Toggle navigation</span>
                                            <span class="icon-bar"></span>
                                            <span class="icon-bar"></span>
                                            <span class="icon-bar"></span>
                                        </button>

                                    </div>
                                    <div class="collapse navigation navbar-collapse navbar-ex1-collapse remove-space">
                                        <ul class="list-unstyled nav1 cl-effect-10">
                                            <li><a  data-hover="Home" class="active"><span>Home</span></a></li>
                                            <li><a data-hover="About"  href="about.html"><span>About</span></a></li>
                                            <li><a data-hover="Rooms"  href="rooms.html"><span>Rooms</span></a></li>
                                            <li><a data-hover="Gallery"  href="gallery.html"><span>Gallery</span></a></li>
                                            <li><a data-hover="Dinning" href="dinning.html"><span>Dinning</span></a></li>
                                            <li><a data-hover="News" href="news.html"><span>News</span></a></li>
                                            <li><a data-hover="Contact Us" href="contact.html"><span>contact Us</span></a></li>
                                        </ul>
                                        

                                    </div>
                                </nav>
                            </div>                             
                            <SearchBar handleSubmit={handleSubmit}/>
                            
                        </nav>
                  
                
            </header>

        </div>


        )
}
