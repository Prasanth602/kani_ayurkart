import React, { useEffect, useState } from "react";
import axios from "axios";
import './HealthAndNutritionDropdown.css';

export default function HealthAndNutrionDropdown(){
    const [list, setList] = useState([]);
    useEffect(()=>{
        axios.get("http://localhost:9092/HealthNutrion/Categories")
        .then((response)=>{
            console.log(response.data)
            let result= [];
            result=[response.data.personalCareHMasterDtlRes];
            setList([...result])
        })
    })
    console.log(list)

    return(
        <div className="health-nutrition">
             { list.map(item=>{
            return(
                <ul className="health-dropdown-list">
                    { item.map(items => {
                        return(
                            <li className="list-item">
                                <a href="">{items.category}</a>
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