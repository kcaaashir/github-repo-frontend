import React, {useState} from 'react'
import Menu from './Menu'
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles.css"
import { Fragment } from 'react';

const Layout = ({title = 'Title',description = 'Description',className, children}) =>{
    
    return (
        <Fragment>
            <Menu />
            <div style={{overflow: "none",  borderCollapse: "separate",borderSpacing: "15px" , border: "5px solid lightblue"}}>
                <div className={className}>
                    {children}
                </div>
            </div>
        
        </Fragment>
    )
}


export default Layout;
