import React, {Fragment, useEffect} from 'react';
import { Link } from 'react-router-dom';

import Search from './Search';
import { useState } from 'react';

// const isActive = (history, path) => {
//     if(history.location.pathname === path){
//         return {color: '#ff9900'}
//     } else {
//         return {
//             color:'black'
//         }
//     }
// }

const Menu = ({history}) => {
    
    useEffect(()=>{
    
    }, [])
    
    return(
        <div className="sticky-top top-menu" style={{borderBottom: "1px solid #dee2e6"}}>
            <ul style={{height: "45px"}} className="nav nav-tabs bg-white">
                
                <li className="nav-item">
                    <Link className="nav-link"  to="/">Home</Link>
                </li>
            </ul>
        
        </div>
    )
}

export default Menu;

