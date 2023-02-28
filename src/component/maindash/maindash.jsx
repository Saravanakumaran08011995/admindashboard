
import React from "react";
import DashCard from "./Card/card";
import './maindash.css';
import Project from "./project/projects";
import {colorData} from './../../Data/data'


const Maindash = () => {

    return(

        <div className="maindash">
         <div className="tittle"> 
           <div className="dash-title">Dashboard</div>
              <div className="dash-btn">
                <button> Generate Report</button>
              </div>
            </div>
       
              <DashCard/>
              <Project/>
              <Color/>
        </div>
    )
}

export default Maindash


 export const Color = () =>{
    return(
        <div className="colordash">
            {colorData.map((item,idx)=>{

         return (
                 <div className="colordiv" key={idx}  style={{color:item.color, backgroundColor:item.backgroundcolor}}>
                       <div className="colortitle">{item.colorTitle}</div>
                       <div className="color">{item.backgroundcolor}</div>
    
                 </div>
                )
                })}
          </div>
        
    )
}