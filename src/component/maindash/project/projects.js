import React from 'react';
import { projectData } from '../../../Data/data';
import './project.css';
import ProgressBar from 'react-bootstrap/ProgressBar';
import 'bootstrap/dist/css/bootstrap.min.css';

const Project = () =>{

    return(

        <div className='projects'>
         <div className='title'>Projects</div>
          {
            projectData.map((item,idx)=>{

                return(
                   <div key={idx} className="project">
                    
                    <div className='project-header'>
                    <div className='project-title'>{item.title}</div><div className='progresspercent'>{item.value}</div>

                    </div>
                     <ProgressBar variant={item.color} now={item.rangevalue}/> 
                   </div>
                )
            })

          }
        </div>
    )
}

export default Project;



// function ContextualExample() {
//   return (
//     <div>
//       <ProgressBar variant="success" now={40} />
//       <ProgressBar variant="info" now={20} />
//       <ProgressBar variant="warning" now={60} />
//       <ProgressBar variant="danger" now={80} />
//     </div>
//   );
// }

