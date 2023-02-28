import React from 'react';
import './forgot.css';
import { useHistory } from 'react-router-dom';



const ForgotDash = () => {
    return(
        <div className='forgotdashboard'>
            <div className='forgotdashtitle'>Forgot Password</div>
            <ForgotDashboard/>
        </div>
    )
}

export default ForgotDash ;


const ForgotDashboard = () => {

    const history = useHistory();

    return(
        <div className='forgotdiv'>
            
                <div className='forgottitle'>Forgot Your Password</div>
                <div className='forgotdescription'>
                We get it, stuff happens. Just enter your email address below and we'll 
                send you a link to reset your password!
                </div>
               <div className='forgotinputfield'>
                <input type='text'  placeholder=' Enter Email Address'/>
               </div>
                <div className='forgotbtn'>
                   <button>Forgot Account</button>
                </div> 
                <hr/> 
                
                    
                       <div onClick={()=>history.push("/pages/register")} className='link'><span>Create an Account!</span></div>
                       <div onClick={()=>history.push("/pages/login")} className='link'><span>Already have an account? Login!</span></div>
                    
                
               
        </div>
    )
}