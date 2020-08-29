import React, { useState } from "react";
import { NavLink } from "react-router-dom";
 import "./Contact.css"

export default function Contact (){
  return (
    <div className="containera">
      <div className="contacta">
        <div className="createdBya">
          <p>Created By:</p>
        </div>
         <a href="https://github.com/GuillermoAmbroggio" className="linka" target="_blank">
        <p>Ambroggio, Guillermo</p>
        </a>
        <a href="https://github.com/maticordoba7/" className="linka" target="_blank">      
        <p>Cordoba, Matias</p>
        </a>
        <a href="https://github.com/rodrigomp88" className="linka" target="_blank">         
        <p>Pinea, Rodrigo</p>
        </a>
        <a href="https://github.com/cesar2016" className="linka" target="_blank">        
        <p>Sanchez, Cesar</p>
        </a>
        <a href="https://github.com/facuuriona4/" className="linka" target="_blank">  
        <p>Uriona, Facundo</p>
        </a>
      </div>
    </div>
  )
}
