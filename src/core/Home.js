import React, {useState, useEffect} from 'react'
import Layout from './Layout'
import { Link } from 'react-router-dom';
import Search from "./Search";
import {getRepositary} from "../Api/githubApi";

const Home = () => {
    
    const [tableData ,  setTableData] = useState([])
    
    const getdata = async(username, perpage) => {
        let data = await getRepositary(username)
        setTableData(data)
    }
    
    useEffect(() => {
    
    }, [])
    return (
        <Layout title="Home Page">
           <div className='container'>
               <div className='row'>
                   <div className='col-3'>
                       <Search getData={getdata}/>
                   </div>
                   <div className='col-3'>
                   
                   </div>
                   <div className='col-3'>
                   
                   </div>
                   
               </div>
    
               <table id="dtBasicExample" className="table table-striped table-bordered table-sm" cellSpacing="0"
                      width="100%">
                   <thead>
                   <tr>
                       <th className="th-sm">Name
            
                       </th>
                       <th className="th-sm">Position
            
                       </th>
                       <th className="th-sm">Office
            
                       </th>
                       <th className="th-sm">Age
            
                       </th>
                       <th className="th-sm">Start date
            
                       </th>
                       <th className="th-sm">Salary
            
                       </th>
                   </tr>
                   </thead>
                   <tbody>
                   
                   {tableData && tableData.map(()=>{
                       <tr>
                           <td>Tiger Nixon</td>
                           <td>System Architect</td>
                           <td>Edinburgh</td>
                           <td>61</td>
                           <td>2011/04/25</td>
                           <td>$320,800</td>
                       </tr>
                   })}
                   </tbody>
               </table>
              
           </div>
        </Layout>
    )
}


export default Home;
