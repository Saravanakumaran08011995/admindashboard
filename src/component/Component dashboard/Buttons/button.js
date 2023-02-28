import React from 'react';
import { circlebtn } from './btndata';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './button.css';

const BtnDash = () => {
    return(
        <div className='ButtonDiv'>
            <div className='btndash'>Button</div>
            <Btn/>
        </div>
    )
}

export default BtnDash ;


const Btn = () => {
       
    return(
       <div className='circlebtn'>
        {circlebtn.map((item,idx)=>{

            return(
                <div key ={idx} className='btncontent'>
                    {item.title&& <div className='btntitle'>{item.title}</div>}
                    {item.paragraph&&<p>{item.paragraph}</p>}
                    {item.btntitle&&
                     <div>
                       <div>{item.btntitle}</div>
                       {item.subbtn.map((item,idx)=>{

                        return(
                            <Button variant={item.color} className={item.classname} key={idx}>
                              <item.subtnname/>
                            </Button>
                        )
                       })} 

                     </div>   
                    
                    
                    
                    }
                </div>
            )
        })}
       </div>
    )
}