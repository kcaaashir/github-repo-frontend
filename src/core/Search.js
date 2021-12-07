import React, {useState, useEffect} from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import {getRepositary} from "../Api/githubApi";

const Search = (props) => {
    const [data, setData] = useState({
        categories: [],
        category: '',
        search: '',
        results: [],
        searched: false
    })
    
    
   
    
    useEffect(() => {
    
    }, [])
    
    
    const searchData = async() => {
        let data = await getRepositary('kcaaashir')
        // tableData = data;
    }
    
    const searchSubmit = (e) =>{
        e.preventDefault()
        searchData()
    }
    
    const handleChange = (name) => event =>{
        setData({...data, [name]:event.target.value, searched: false})
        console.log('data', data)
    }
    
    
    const searchedProducts = (results = []) => {
        
        // return( <div className="row">
        //         {results.data && results.data.map((p,i) => (
        //             <Card key={i} product={p} />
        //         ))}
        //     </div>
        // )
    }
    
    const searchForm = () => (
        // <form onSubmit={searchSubmit}>
          <span style={{border: "none",backgroundColor: "white",height: "37px"}} className="input-group-text">
              <div className="input-group input-group-lg">
                    <input style={{height: "29px",fontSize: "20px"}}  type="search"
                           className="form-control"
                           onChange={handleChange('search')}
                           placeholder="Search"/>
                     <button style={{border: 'none', backgroundColor: "#ff9900"}} onClick={() => props.getData(data.search)}  ><FontAwesomeIcon icon={faSearch} /></button>
              </div>
          </span>
        // </form>
    )
    
    
    return (
        <div className="row">
            <div className="container ">
                {searchForm()}
            </div>
        </div>
    )
};

export default Search;
