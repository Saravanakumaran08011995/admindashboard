import './App.css';
import React from "react" ;
import {Redirect,Route,Switch} from 'react-router-dom'
import Sidebar from './component/SideBar/sidbar';
import Maindash from './component/maindash/maindash';
import BtnDash from './component/Component dashboard/Buttons/button'
import CardDash from './component/Component dashboard/Cards/card'
import ColorDash from './component/Utilities Dashboard/Colors/color'
import BorderDash from './component/Utilities Dashboard/Borders/border'
import AnimationDash from './component/Utilities Dashboard/Animation/animation'
import LoginDash from  './component/Pages dashboard/Login/login'
import ForgotDash from './component/Pages dashboard/Forgot Password/forgot'
import RegisterDash from './component/Pages dashboard/Register/register'
import TableDash from './component/Tables Dashboard/table'
import ErrorDash from './component/Pages dashboard/404 Page/404page'
import Header from './component/Header component/header';
function App() {
 
  return (
  <div className='App'>
     <div className='AppGlass'>

           <Header/>
      
      
          <Sidebar/>
      
      
           <Body/>
      
      <div>

      </div>
     </div>
  </div>
  );
}

export default App;
                     

const Body = () =>{
  return(
    <div className='body'>
      <Switch>
         <Route exact path='/dashboard'>
         <Maindash/>
         </Route>

         <Route exact path='/'>
          <Redirect to ='/dashboard'/>
         </Route>

         <Route exact path='/component/button'>
          <BtnDash/>
         </Route>

         <Route exact path='/component/cards'>
          <CardDash/>
         </Route>

         <Route exact path='/utitlities/colors'>
         <ColorDash/>
         </Route>

         <Route exact path='/utilities/borders'>
          <BorderDash/>
         </Route>

         <Route exact path='/utilities/animations'>
          <AnimationDash/>
         </Route>

         <Route exact path='/pages/login'>
         <LoginDash/>
         </Route>

         <Route exact path='/pages/forgotpassword'>
           <ForgotDash/>
         </Route>

         <Route exact path='/pages/register'>
           <RegisterDash/>
         </Route>

         <Route exact path='/tables'>
          <TableDash/>  
         </Route>
         
         <Route exact path='**'>
           <ErrorDash/>
         </Route>

      </Switch>
      
    </div>
  )
}


  