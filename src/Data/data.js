
import { AiFillDashboard,AiFillSetting,AiFillFolder } from "react-icons/ai";
import { GiSpanner} from "react-icons/gi";
import { IoBarChartSharp} from "react-icons/io5";
import { BsTable} from "react-icons/bs";
import {FaCalendarDay} from "react-icons/fa";
import {TbCurrencyDollar} from "react-icons/tb";
import {GiNotebook} from "react-icons/gi";
import {TiMessages} from "react-icons/ti";
import {CgProfile} from "react-icons/cg";
import {ImProfile} from "react-icons/im";
import {GrUserSettings} from "react-icons/gr";
import {TfiMenuAlt} from "react-icons/tfi";
import {IoIosLogOut} from "react-icons/io";
import {MdOutlineLocalPostOffice} from "react-icons/md";
import {TbMoodBoy} from "react-icons/tb";
import {CgGirl,CgDanger} from "react-icons/cg";
import {BsBellFill,BsCashCoin,BsSearch} from "react-icons/bs";
import {HiOutlineClipboardDocumentList} from "react-icons/hi2";


export const headerData=[
         {  classname:"profile",
            icon:CgProfile,
            submenu:[
               {  
                  subicon:ImProfile ,
                  subname:"Profile"
               },
               {
                  subicon:GrUserSettings ,
                  subname:"Settings"
               },
               {
                  subicon:TfiMenuAlt ,
                  subname:"Active Log"
               },
               {
                  subicon:IoIosLogOut ,
                  subname:"Logout"
               }
            ]
         },
         {   classname:"message",
            icon:MdOutlineLocalPostOffice,
            submenu:[
               {  
                  title:"MESSSAGE CENTER"
               },
               {
                   subicon:CgGirl ,
                   subcontent:"Hi there! I am wonderin..." ,
                   subcontent2: "Emily Fowler . 58m"
               },
               {
                  subicon:TbMoodBoy ,
                  subcontent:"I have the photos that y..." ,
                  subcontent2:"Jae Chun . 1d"
              },
              {
               subicon:TbMoodBoy ,
               subcontent:"Last month's report look..." ,
               subcontent2:"Morgan Alvaraz . 2d"
              },
              {
                subicon:CgGirl ,
                subcontent:"Am I a good girl? the re..." ,
                subcontent2:"Chicken the dog"
              }
            ]
         },
         {  classname:"bell",
            icon:BsBellFill,
            submenu:[
               { 
                  title:"ALERT CENTER"
               },
               {
                  subicon:HiOutlineClipboardDocumentList ,
                  subdate: "December 12,2019",
                  bellcontent: "A new monthly report ready to download"
               },
               {
                  subicon:BsCashCoin ,
                  subdate: "December 7,2019",
                  bellcontent:"$400 has been deposited into your account!"
               },
               {
                  subicon:CgDanger ,
                  subdate:"December 2,2019" ,
                  bellcontent:"Spending Alert:We've noticed unusually high spending for account"
               }
            ]
         },
         {
            classname:"searchbar",
            searchicon:BsSearch
         }

]


export const sidebardata =[
            
            {
                icon:AiFillDashboard,
                heading:"Dashboard",
                path:"/dashboard"
              },
              {
                icon:AiFillSetting,
                heading:"Component",
                submenu:[{
                            tittle:"Button",
                            path:"/component/button"
                  
                         },
                         {
                            tittle:"Cards",
                            path:"/component/cards"
                         }
                       ]
                       
              },
              {
                icon:GiSpanner,
                heading:"Utilities",
                submenu:[{
                            tittle:"Colors",
                            path:"/utitlities/colors"
                         },
                         {
                            tittle:"Borders",
                            path:"/utilities/borders"
                  
                         },
                         {
                            tittle:"Animations",
                            path:"/utilities/animations"
                         }
                       ]
               
              },
              {
                icon:AiFillFolder,
                heading:"Pages",
                submenu:[{
                           tittle:"Login",
                           path:"/pages/login"
                        
                  
                         },
                         {
                            tittle:"Register",
                            path:"/pages/register"
                 
                         },
                         {
                            tittle:"Forgot Password",
                            path:"/pages/forgotpassword"
                  
                         },
                         {
                            tittle:"404 Page",
                            path:"**"
                         }
                       ]
            
              },
              
              {
                icon:BsTable,
                heading:"Tables",
                path:"/tables"
              }
]





export const cardData = [

   {  
      color:'text-primary',
      heading:'EARNINGS (MONTHLY)',
      value:'$40,000',
      icon: FaCalendarDay
   },
   {  color:'text-success',
      heading:'EARNINGS (ANNUAL)',
      value:'$215,000',
      icon: TbCurrencyDollar
   },
   {  color:'text-info',
      heading:'TASKS',
      value:'50% ',
      radioValue:50,
      icon:GiNotebook
   },
   {  color:'text-warning',
      heading:'PENDING REQUESTS',
      value:18,
      icon: TiMessages
   },
]

// const red =red;


export const projectData = [
   {
      title:"Server Migration" ,
      value: "20%",
      rangevalue:20,
      color:'danger'
   },
   {
      title:"Sales Tracking" ,
      value: "40%",
      rangevalue:40,
      color:'warning'
   },
   {
      title:"Customer Database" ,
      value: "60%",
      rangevalue:60,
      color:'primary'
   },

   {
      title:"Payout Details" ,
      value: "80%",
      rangevalue:80,
      color:'info'
   },

   {
      title:"Account Setup" ,
      value: "Complete!",
      rangevalue:100,
      color:'success'
   }


]
         

export const colorData = [
   {
      colorTitle:"Primary",
      color:"white",
      backgroundcolor:"#4e73df"
   },
   {
      colorTitle:"Success",
      color:"white",
      backgroundcolor:"#1cc88a"
   },
   {
      colorTitle:"Info",
      color:"white",
      backgroundcolor:"#36b9cc"
   },
   {
      colorTitle:"Warning",
      color:"white",
      backgroundcolor:"#f6c23e"
   },
   {
      colorTitle:"Danger",
      color:"white",
      backgroundcolor:"#e74a3b"
   },
   {
      colorTitle:"Secondary",
      color:"white",
      backgroundcolor:"#858796"
   },
   {
      colorTitle:"Light",
      color:"grey",
      backgroundcolor:"#f8f9fc"
   },
   {
      colorTitle:"Dark",
      color:"white",
      backgroundcolor:"#5a5c69"
   }

]
