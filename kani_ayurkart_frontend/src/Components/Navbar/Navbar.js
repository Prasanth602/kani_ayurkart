import React from "react";
import "./Navbar.css";
 
function Navbar(){
let arr=["About Us", "Ayurveda","Classical Medicine", "Personal Care", "Brands", "Health and Nutrition", "General"];
return(
    <div className="nav-bar">
        <ul className="nav-list">
            {
                arr.map((items)=>{
                    return(
                        <li className="nav-item">
                            <a href="">{items}</a>
                        </li>
                    )
                })
            }
        </ul>
    </div>
)
}
export default Navbar 