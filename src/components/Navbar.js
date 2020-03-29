import React from "react";

export default function NavBar(props) {
  return (
  


      <nav class="navbar">
        <a class="navbar-brand">
          <img src="cash.png" alt=""></img>
        </a>
        
        <ul className="navbar-listing">
          
          <li>
           
            <img src={ props.avatar ? props.avatar : props.avatarFallbackImage } className="avatar avatar-navbar " id="avatar-image" alt=""/>
           
          </li>
          <li style={{"color":"white"}}>{props.name}</li>
          <li>
            <button
              className="btn btn-primary btn-sm"
              id="signout-button "
              onClick = {props.onclick}
            >
              Logout
            </button>
          </li>
          
        </ul>
      </nav>
   
  );
}
