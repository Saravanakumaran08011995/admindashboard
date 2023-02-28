import React from 'react';
import './register.css';
import {BsGoogle} from 'react-icons/bs'
import {FaFacebookF} from 'react-icons/fa'



const RegisterDash = () => {
    return(
        <div className='registerdashboard'>
            <div className='registerdashtitle'>Register Your Account</div>
            <RegisterDashboard/>
        </div>
    )
}

export default RegisterDash ;

const RegisterDashboard = () => {

    return(
        <div className='registerdiv'>
            
                <div className='registertitle'>Register Account</div>
               <div className='registerinputfield'>
               <input type='text'  placeholder='First Name'/>
               <input type='text'  placeholder='Last Name'/>
                <input type='text'  placeholder='Email Address'/>
                <input type='text'  placeholder='Password'/>
                <input type='text'  placeholder='Repeat Password'/>
               </div>
                <div className='registerbtn1'>
                   <button>Register Account</button>
                </div> 
                <hr/> 
               <div className='registerbtn2'>
                 <button><BsGoogle/><span>Register with Google</span></button>
               </div>
               <div className='registerbtn3'>
                 <button><FaFacebookF/><span>Register with Facebook</span></button>
              </div>
        </div>
    )
}
