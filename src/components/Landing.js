import React,{Component} from "react"
import NavBar from './Navbar';
import Body from './Body'

export default function Landing(props){
    return(
       
        <div>
            <NavBar avatar={props.avatar} avatarFallbackImage={props.avatarFallbackImage}
            name={props.name} onclick={props.onclick} />

            <Body />
        </div>
           
       
    )
}