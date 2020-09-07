import React, { useState } from "react";
import { NavLink } from "react-router-dom";
 import "./Contact.css"

export default function Contact (){
  return (
    

    <div id="contact-page" class="container">
    <div class="bg">
      <div class="row">    		
        <div class="col-sm-12">    			   			
        <h2 class="title text-center">Contact <strong>Us</strong></h2>    			    				    				
        {/* <div id="gmap" class="contact-map">
        </div> */}
      </div>			 		
    </div>    	
      <div class="row">  	
        <div class="col-sm-8">
          <div class="contact-form">
            <h2 class="title text-center">Get In Touch</h2>
            <div class="status alert alert-success" style={{display: 'none'}}></div>
            <form id="main-contact-form" class="contact-form row" name="contact-form" method="post">
                  <div class="form-group col-md-6">
                      <input type="text" name="name" class="form-control" required="required" placeholder="Name"/>
                  </div>
                  <div class="form-group col-md-6">
                      <input type="email" name="email" class="form-control" required="required" placeholder="Email"/>
                  </div>
                  <div class="form-group col-md-12">
                      <input type="text" name="subject" class="form-control" required="required" placeholder="Subject"/>
                  </div>
                  <div class="form-group col-md-12">
                      <textarea name="message" id="message" required="required" class="form-control" rows="8" placeholder="Your Message Here"></textarea>
                  </div>                        
                  <div class="form-group col-md-12">
                      <input type="submit" name="submit" class="btn btn-primary pull-right" value="Submit"/>
                  </div>
              </form>
          </div>
        </div>
        <div class="col-sm-4">
          <div class="contact-info">
            <h2 class="title text-center">Give us your like</h2>
           
            <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FTen-Shop-730405934009493%2F&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=644328202376419" width="340" height="500" style={{border:'none', overflow:'hidden'}} scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media"></iframe>
            <div class="social-networks">
              <h2 class="title text-center">Social Networking</h2>
            <ul>
              <li>
                <a href="#"><i class="fa fa-facebook"></i></a>
              </li>
              <li>
                <a href="#"><i class="fa fa-twitter"></i></a>
              </li>
              <li>
                <a href="#"><i class="fa fa-google-plus"></i></a>
              </li>
              <li>
                <a href="#"><i class="fa fa-youtube"></i></a>
              </li>
            </ul>
            </div>
          </div>
        </div>    			
      </div>  
    </div>	
  </div>



  )
}
