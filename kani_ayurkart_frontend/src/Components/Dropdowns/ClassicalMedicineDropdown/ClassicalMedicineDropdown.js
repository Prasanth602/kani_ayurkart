import React from "react";
import './ClassicalMedicineDropdown.css';

function ClassicalMedicineDropdown(){

    let classicalMedicine = ["Arishtam","Bhasmam","Capsules","Churnam","Ghritam","Gulika"];
 return(
    < div className="medicine-dropdown">
        <ul className="medicine-dropdown-list">
            { classicalMedicine.map(item =>{
                return(
                    <li className="list-item">
                        <a href="">{item}</a>
                    </li>
                )
            })}
        </ul>
    </div>
 )
}
export default ClassicalMedicineDropdown;