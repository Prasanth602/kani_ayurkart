import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './BrandsDropdown.css';
export default function BrandsDropdown(){
    const[list, setList] =useState([]);


useEffect(()=>{
    axios.get("http://localhost:9092/Brands/Categories")
    .then(response =>{console.log(response)
        let result= [];
        result=[response.data.BrandsMasterDtlRes];
        setList([...result])

})
})
console.log(list);
console.log(list);
    return(
        <div className='brands-dropdown'>
           { list.map(item=>{
            return(
                <ul className="brands-dropdown-list">
                    { item.map(items => {
                        return(
                            <li className="list-item">
                                <a href="">{items.brands}</a>
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