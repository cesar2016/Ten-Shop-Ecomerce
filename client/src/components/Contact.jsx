import React, { useState } from "react";
import { NavLink } from "react-router-dom";
// import "./Contact.css"

export default function Contact (){
  return (
    <div className="container ">
      <div className="contact">
        <div className="createdBy">
          <p>Created By:</p>
        </div>
        <NavLink to="https://github.com/ILIKETOEATCHICKEN" className="Link">
        <p>Ambroggio, Guillermo</p>
        </NavLink>
        <NavLink to="https://github.com/maticordoba7/" className="Link">
        <p>Cordoba, Matias</p>
        </NavLink>
        <NavLink to="https://github.com/rodrigomp88" className="Link">
        <p>Pinea, Rodrigo</p>
        </NavLink>
        <NavLink to="https://github.com/cesar2016" className="Link">
        <p>Sanchez, Cesar</p>
        </NavLink>
        <NavLink to="https://github.com/facuuriona4/" className="Link">
        <p>Uriona, Facundo</p>
        </NavLink>
      </div>
    </div>
  )
}
