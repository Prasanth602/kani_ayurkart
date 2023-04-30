import React,{useEffect, useState} from "react";
import './ClassicalMedicineDropdown.css';
import axios from "axios";
function ClassicalMedicineDropdown(){
    const [list, setList] = useState([]);

     useEffect(() =>{
       axios.get("http://localhost:9092/ClassicalMedicine/Categories")
        .then((response)=>{
            let result= [];
            result=[response.data.ClassicalMedicineMasterDtlRes];
            setList([...result])
        })
    });
 return(
    <div className="medicine-dropdown">
        { list.map(item=>{
            return(
                <ul className="medicine-dropdown-list">
                    { item.map(items => {
                        return(
                            <li className="list-item">
                                <a href="">{items.classicalMedicine}</a>
                            </li>  
                        )
                        })
                    }
                </ul>
                )
            })}
    </div>
 )
}
export default ClassicalMedicineDropdown;