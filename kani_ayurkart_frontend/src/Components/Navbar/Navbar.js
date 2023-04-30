import React,{useState, useRef} from "react";
import ClassicalMedicineDropdown from "../Dropdowns/ClassicalMedicineDropdown/ClassicalMedicineDropdown";
import useOnHoverOutside from '../Hooks/useOnHoverOutside.js'
import PersonalCareDropdown from "../Dropdowns/PersonalCareDropdown/PersonalCareDropdown";
import HealthAndNutrionDropdown from "../Dropdowns/HealthAndNutrition/HealthAndNutritionDropdown";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import BrandsDropdown from "../Dropdowns/BrandsDropdown/BrandsDropdown";

 
function Navbar(){
    const dropdownRef = useRef(null);
    const [isMenuDropDownOpen, setMenuDropDownOpen] = useState(false);
    const [isPersonalCareDropdown, setPersonalCareDropdown] = useState(false);
    const [isHealthDropdown, setHealthDropdown] = useState(false);
    const [isBrandsDropdown, setBrandsDropdown] = useState(false);
    const closeHoverMenu = () => {
      setMenuDropDownOpen(false);
      setPersonalCareDropdown(false);
      setHealthDropdown(false);
        setBrandsDropdown(false)
    };
  
    useOnHoverOutside(dropdownRef, closeHoverMenu); 
return(
   <>
    <div className="nav-bar" >
        <ul className="nav-list" ref={dropdownRef}>
            <div>
                <li className="nav-item" >
                    <Link to="AboutUs" >About Us </Link>
                </li>
            </div>

            <div>
                <li className="nav-item"  onMouseOver={() => setMenuDropDownOpen(true)} >
                    <a href="">Classical Medicine </a>
                </li>
                { isMenuDropDownOpen &&  <ClassicalMedicineDropdown/> }
                 
            </div>
            
            <div>
                <li className="nav-item" onMouseOver={() => setPersonalCareDropdown(true)}>
                    <a href="">Personal Care </a> 
                </li>
                { isPersonalCareDropdown && <PersonalCareDropdown/> }
                
            </div>
            

            <div>
                <li className="nav-item"  onMouseOver={() =>setBrandsDropdown(true)}>
                    <a href="">Brands </a>
                </li>
                {isBrandsDropdown && <BrandsDropdown/>}
            </div>
            <div>
                <li className="nav-item"  onMouseOver={() => setHealthDropdown(true)}>
                    <a href="">Health and Nutrition </a>
                </li>
               {isHealthDropdown && <HealthAndNutrionDropdown/>}
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