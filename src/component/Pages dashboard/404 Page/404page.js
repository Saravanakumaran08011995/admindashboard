import React from 'react';
import './404page.css';
import { useHistory } from 'react-router-dom';



const ErrorDash = () => {
    return(
        <div className='errordashboard'>
            <div className='errordashtitle'>Error Dashboard</div>
            <Errorpage/>
        </div>
    )
}

export default ErrorDash ;

const Errorpage = () => {
    const history = useHistory();

    return(
        <div className='errorscreen'>
            <div className='errortitle'>404</div>
            <div className='titledescription'>Page Not Found</div>
            <div className='description'>It looks like you found a glitch in the matrix...</div>
            <div className='backHome'><span onClick={()=>history.push("/dashboard")}>← Back to Dashboard</span></div>
        </div>
    )
}