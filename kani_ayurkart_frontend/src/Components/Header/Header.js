import React from "react";
import './Header.css';
import '../Authentication/Register/Register.css';
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

function Header(){
return(
    <div className="header">
        <Link className="logo" to="/">
            Ayurkart
        </Link>
        <div className="search-bar f-1">
            <input type="search" placeholder="search"></input>
            <span className="search-icon"><FaSearch/></span>
        </div>
    </div>
)
}
export default Header;