import React, { useState } from 'react';
import './table.css';
import tableData from "./tableData.json"

const TableDash = () => {
    return(
        <div className='tabledashboard'>
            <div className='tabledashtitle'>Table Dashboard</div>
            <PaginationData/>
        </div>
    )
}

export default TableDash ;


const PaginationData = () => {

    const [pagecount,setPagecount] = useState(1);
    const countperpage =5;
    
    const lastpage = pagecount*countperpage;
    const firstpage =lastpage-countperpage;
    const paginationiitems = tableData.slice(firstpage,lastpage)
   

    const pages =Math.ceil(tableData.length/countperpage);

    const paginationcount=[];

    for(let idx=1; idx<=pages; idx++){
          paginationcount.push(idx)
     }



return(
        <div>
            <div className='paginationbtn'>
                
                <table>
                    <thead>
                        <tr>
                            <th>S/NO</th>
                            <th>Name</th>
                            <th>Position</th>
                            <th>Office</th>
                            <th>Age</th>
                            <th>Start dates</th>
                            <th>Salary</th>
                        </tr>
                    </thead>
                    {/* <tfoot>
                        <tr>
                            <th>S/NO</th>
                            <th>Name</th>
                            <th>Position</th>
                            <th>Office</th>
                            <th>Age</th>
                            <th>Start date</th>
                            <th>Salary</th>
                        </tr>
                    </tfoot> */}
                    <tbody>
                        
                        {paginationiitems.map((item,idx)=>{
                            return(
                            <tr key={idx}>
                             <td>{item['S/NO']}</td>
                             <td>{item.Name}</td>
                             <td>{item.Position}</td>
                             <td>{item.Office}</td>
                             <td>{item.Age}</td>
                             <td>{item['Start date']}</td>
                             <td>{item.Salary}</td>
                             
                            </tr>
                             )
                            })}

                        
                    </tbody>
            
                </table>
               
            </div>
            <div className='paginationdiv'>
            <div className='pagination'>
               <button onClick={()=>{pagecount>1&& setPagecount(pagecount-1)}}>Prev</button>             
                <ul>
                    {paginationcount.map((item,idx)=>{
                        return(
                            <li className={pagecount===idx+1? "page pageactive" : "page" } onClick={()=>setPagecount(idx+1)} key={idx}>{item}</li>
                        )
                    })}
                </ul>
                <button onClick={()=>{pagecount<pages&&setPagecount(pagecount+1)}}> Next</button>
                
               </div>
            </div>
        </div>
    )
}


