import React,{useState, useRef} from "react";
import ClassicalMedicineDropdown from "../Dropdowns/ClassicalMedicineDropdown/ClassicalMedicineDropdown";
import useOnHoverOutside from '../Hooks/useOnHoverOutside.js'
import "./Navbar.css";
 
function Navbar(){

    const dropdownRef = useRef(null);
    const [isMenuDropDownOpen, setMenuDropDownOpen] = useState(false);

    const closeHoverMenu = () => {
      setMenuDropDownOpen(false);
    };
  
    useOnHoverOutside(dropdownRef, closeHoverMenu); 
return(
   <>
    <div className="nav-bar">
        <ul className="nav-list" >
            <div>
                <li className="nav-item"  >
                    <a href="">About Us </a>
                </li>
            </div>

            <div ref={dropdownRef}>
                <li className="nav-item" onMouseOver={() => setMenuDropDownOpen(true)} >
                    <a href="">Classical Medicine </a>
                </li>
            </div>
            {isMenuDropDownOpen && <ClassicalMedicineDropdown/>} 
            <div>
                <li className="nav-item">
                    <a href="">Personal Care </a>
                </li>
            </div>
            <div>
                <li className="nav-item"  >
                    <a href="">Brands </a>
                </li>
            </div>
            <div>
                <li className="nav-item"  >
                    <a href="">Health and Nutrition </a>
                </li>
            </div>
            <div>
                <li className="nav-item"  >
                    <a href="">General </a>
                </li>
            </div> 
        </ul>
        
    </div>
    
   
   </>
)
}
export default Navbar 