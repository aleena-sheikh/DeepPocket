import React,{useState, useEffect} from "react"
import {Bar, Line, Pie, Doughnut} from "react-chartjs-2"
import { withRouter } from "react-router-dom"


export default function Table(){

    // const available_balance_data ={
    //     datasets: [{
    //         data:[100,210,43200,]
    //     }]
    // }

    useEffect(()=>{

        fetch('results.json')
        .then(res =>res.json())
        .then(data => console.log(data))
        



    },[])

    return(
       <div style={{  'backgroundColor': 'white', 'height': '2400px'}}>
           <nav class="navbar" style={{  'backgroundColor': 'rgb(51, 46, 46)'}}>
            <span class="navbar-text">
              <h3 style={{'color':'white'}}>Your Account</h3>
            </span>
        </nav>




        <div>
            <img src="bank.png" style={{"width":"1800px", "height":"900px", "margin":"2rem"}}/>
        </div>
        <div>
        <img style={{"width":"1800px", "height":"700px"}} src="piii.png"/>
        </div>        
         
        </div>
    
    )
    

}