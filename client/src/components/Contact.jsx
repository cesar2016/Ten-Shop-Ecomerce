import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Contact.css"

export default function Contact (){
  return (
    <div className="container">
      <div className="contact">
        <div className="createdBy">
          <p>Created By:</p>
        </div>
        <Link to="https://github.com/ILIKETOEATCHICKEN" className="link">
        <p>Ambroggio, Guillermo</p>
        </Link>
        <Link to="https://github.com/maticordoba7/" className="link">
        <p>Cordoba, Matias</p>
        </Link>
        <Link to="https://github.com/rodrigomp88" className="link">
        <p>Pinea, Rodrigo</p>
        </Link>
        <Link to="https://github.com/cesar2016" className="link">
        <p>Sanchez, Cesar</p>
        </Link>
        <Link to="https://github.com/facuuriona4/" className="link">
        <p>Uriona, Facundo</p>
        </Link>
      </div>
    </div>
  )
}
