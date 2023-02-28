import React from 'react';
import Card from 'react-bootstrap/Card';
import './border.css';

const BorderDash = () => {
    return(
        <div className='borderDiv'>
            <div className='borderDashTitle'>Border Dashboard</div>
            <Borderelement/>
        </div>
    )
}

export default BorderDash ;

const Borderelement = () =>{

    return(
        <div>

            {colordata.map((item,idx)=>{

                return(
                    <Card key={idx} className="borderelement" text={item.color} border={item.color} style={{ height: '3rem' }}>
        
                    {item.content}
             
                    </Card>
                )
            })}
         

        </div>
    )     
}

const colordata =[

    {
        color:'primary',
        content:'Primary Border'
    },
    {
        color:'success',
        content:'Success Border'
    },
    {
        color:'info',
        content:'Info Border'
    },
    {
        color:'warning',
        content:'Warning Border'
    },
    {
        color:'danger',
        content:'Danger Border'
    },
    {
        color:'secondary',
        content:'Secondary Border'
    },
    
    {
        color:'dark',
        content:'Dark Border'
    }
]