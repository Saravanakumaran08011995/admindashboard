import './sidebar.css'
import React, { useState } from "react"
import {FaReact} from "react-icons/fa";
import { sidebardata } from '../../Data/data';
import {GiHamburgerMenu} from "react-icons/gi"
import { useHistory } from 'react-router-dom';



const Sidebar = () =>{
    
    const[menushow,setMenushow] = useState(false)
    const [active,setActive]=useState(0);
    const[show,setShow]=useState();
    const history = useHistory();
    
    return(
         <div  style={{width: menushow? "13rem" : "6rem"}} className='sideBars'>
            <div className='menuIcon' style={{marginLeft:menushow? "170px" : "60px"}} ><GiHamburgerMenu color='black' size='30px' onClick={()=>setMenushow(!menushow)}/></div>
            <div style={{width: menushow?"90%" :"80%"}} className='logo' onClick={()=>history.push("/dashboard")}>
            </div> 

            <div className='menu'>

            {sidebardata.map((item,idx)=>{
               return(  
               <Sidebarcontent
               item={item}
               key={idx}
               idx={idx}
               menushow={menushow}
               setMenushow={setMenushow}
               history={history}
               active={active}
               setActive={setActive}
               show={show}
               setShow={setShow}
               
               />
               )
               })}
               </div>
         </div>                 
    )
}

export default  Sidebar


const Sidebarcontent = ({item,idx,menushow,setMenushow,history,active,setActive,show,setShow }) => {
    // const [active,setActive]=useState(0);
    const[submenushow,setSubmenushow]=useState(true);
    // const[subactive,setSubactive]=useState()
    // const[menushow,setMenushow]=useState(true)
    const handleclick = () =>{
        setShow(idx)
        setSubmenushow(true)
        
        // console.log(show)
        // {active==idx? "menuItem active" : "menuItem"}
        
    }
    const actives=()=>{
        setActive(idx)

        // setActive(prevActive=>idx)
        // console.log(idx)
        // console.log(active)
    }
    
    const submenushows = () =>{
        console.log(submenushow)
       setSubmenushow(false)
       
       
    }
    
   const routingDashboards =() => {
    history.push(item.path)
    
   }

   const clicktoreducesidebar = () => {
    setMenushow(false)
    
   }
   const submenuchange = () => {
    setShow()
    setSubmenushow(false)
    // setSubactive()
    
   }

  


    return( 
            <div >
                <div  style={{marginLeft: menushow? '0':'1rem'}} className = {active===idx? "menuItem active" : "menuItem"}  onClick={item.submenu? ()=>{ handleclick() ; actives() }  : ()=>{actives() ;clicktoreducesidebar() ;submenuchange();routingDashboards();}}>
                    
                    {menushow? <div  className='menuItem' 
                    
                    ><item.icon size="25px"/> <span>{item.heading}</span></div>:<item.icon size="25px"/>}
                    
                </div>
                {item.submenu && show===idx&&submenushow&&
                //   <div className='submenu' style={{marginLeft: menushow?"10px" :"100%" , position: menushow?"relative":  "absolute"}}>
               <div className='submenu' style={menushow? {position :"relative"}:{position :"fixed" , margin: '-2rem 0 0 6.2rem' ,backgroundColor:'rgb(0, 140, 255)' , fontSize:'0.8rem',border: '1px solid grey' , width:'8.5rem'}}>
                {item.submenu &&  item.submenu.map((item,idx)=>{
                   
                
                   

                    return(
                    <div 
                    // className= {subactive===idx ? 'submenuitem submenuActive' :'submenuitem' }
                    className='submenuitem'
                     key={idx}
                    onClick={()=> {history.push(item.path);clicktoreducesidebar();submenushows()}}
                     >
                        
                    {item.tittle}
                    
                    </div>
                )})
                
                
                }
                
               </div>
              
               }
               
            
            </div>
    )
}