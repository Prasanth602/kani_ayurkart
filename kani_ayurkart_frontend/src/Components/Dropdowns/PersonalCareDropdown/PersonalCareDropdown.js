import React, { useEffect, useState } from "react";
import './PersonalCareDropdown.css'
import axios from "axios";

function PersonalCareDropdown(){
    const [list, setList] = useState([]);

   useEffect(() =>{
        axios.get( "http://localhost:9092/PersonalCare/Categories" )
         .then((response)=>{
           
           let result = [response.data.personalCareMasterDtlRes]
            setList([...result])
         })
     },[]);
    //  console.log(list);

    return(
        
        <div className="personal-care">
                <ul className="category">
                    {  
                        list.map(items =>{
                            return(
                            <li >
                                 {Object.keys(items)} 
                               {/* {Object.values(items)} */}
                           </li>
                           ) 
                        })
                    }
                </ul>
        </div>
    )
}

export default PersonalCareDropdown;