import React, { useState } from 'react';
import { headerData } from '../../Data/data';
import './header.css'


const Header = () =>{
    return(
      <div className='header'>
        {headerData.map((item,idx)=>{

        return(
                <Headercontent
                key={idx}
                item={item}
                idx={idx}
                
                />
            
        )})}
       
      </div>
    )
  }

  export default Header;


  const Headercontent = ({item}) => {
    // item.title&&console.log(item.title)
    const[subshow,setSubshow]=useState(false)
    const subshows = () => {
        setSubshow(!subshow)
        // console.log(subshow)
    }
    return(
        <div className='headercontent'>
           <div className='headericon' onClick={subshows}>
           {item.searchicon? <item.searchicon size='28px'/> : <item.icon size='28px' /> }
          
           </div>
           {subshow&&
           
             item.searchicon&&
               <div className={item.classname}>
                <label >
                  <span>SEARCH:</span>
                  <span><input type='search'/></span>
                
                
                 
                 </label>
                 
               </div>
            
            
           }
           
           {subshow&&item.submenu&& <div className={item.classname}>
            
           {item.submenu&&item.submenu.map((item,idx)=>{
                
                // console.log(item.subicon)
                
                return(
                    subshow&&
                    <div key={idx} onClick={()=>setSubshow(false)}>
                       
                       {item.title&&<div className='subtitle'>{item.title}</div>}
                       

                       {item.subicon&&item.subname&&
                        <div className='profilecenter'>
                          <item.subicon  className='profileicon'/>
                          <div>{item.subname}</div>
                        </div>
                        }
                       
                       {item.subicon&&item.subcontent&&item.subcontent2&&
                        <div className='messagecenter'>
                          <item.subicon size="26px" className='subicon'/>
                          <div className='messagecontent1'>{item.subcontent}</div>
                          <div  className='messagecontent2'>{item.subcontent2}</div>
                        </div>
                        }
                       {item.subicon&&item.bellcontent&&item.subdate&&
                        <div className='alertcenter'>
                          <item.subicon size="26px" className='subicon'/>
                          <span className='bellcontent'>{item.bellcontent}</span>
                          <div className='belldate'>{item.subdate}</div>
                        </div>
                        }
                    </div>                      
                )
            })}
            
            
            </div>}
           
            
           </div>
           
        
    )
  }