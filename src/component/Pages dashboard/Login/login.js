import React from 'react';
import './login.css';
import {BsGoogle} from 'react-icons/bs'
import {FaFacebookF} from 'react-icons/fa'




const LoginDash = () => {
    return(
        <div className='logindahboard'>
            <div className='logindashtitle'>Login to your account</div>
            <LoginDashboard/>
        </div>
    )
}

export default LoginDash ;

const LoginDashboard = () => {

    return(
        <div className='logindiv'>
            
                <div className='logintitle'>Welcome Back</div>
               <div className='logininputfield'>
                <input type='text'  placeholder='Enter Email Address...'/>
                <input type='text'  placeholder='Password'/>
                <div className='checkbox'>
                   <input type='checkbox'/><div>Remember Me</div>
                </div>
               </div>
                <div className='loginbtn1'>
                   <button>Login</button>
                </div> 
                <hr/> 
               <div className='loginbtn2'>
                 <button><BsGoogle/><span>Login with Google</span></button>
               </div>
               <div className='loginbtn3'>
                 <button><FaFacebookF/><span>Login with Facebook</span></button>
              </div>
        </div>
    )
}

