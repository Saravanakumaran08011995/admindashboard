import React from 'react';
import { cardData } from '../../../Data/data';
import './card.css';
import ProgressBar from 'react-bootstrap/ProgressBar';
import 'bootstrap/dist/css/bootstrap.min.css';

const DashCard = () => {

    return(

        <div className='dash-card'>
            
               {cardData.map((item ,idx)=>{
                return(
                    <div key={idx} className='cardbody'>
                    <div id='cardheading' className={item.color}>{item.heading}</div>
                    <div className='cardcontent'> <div>{item.value}</div>
                    {item.radioValue && 
                    <div className='progresscard'><ProgressBar variant='info' now={item.radioValue}/> </div>}
                    </div>
                    <div className='cardicon'><item.icon size="40px" color='rgb(68, 67, 67)'/></div>
                    
                    </div>
                    
                )
               })}

               
        </div>
    )
}

export default DashCard