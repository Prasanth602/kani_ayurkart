import React from "react";
import { FaHeart, FaPen, FaArrowRight, FaCartArrowDown} from 'react-icons/fa'
import { Link } from "react-router-dom";
import './Topbar.css';

function Topbar(){
    return(
        <div className="top-nav">
            <div className="top-nav-left">
                <div className="wishlist top-nav-left-item">
                    <FaHeart /> 
                    <span>wishlist</span>
                </div>

                <div className="login top-nav-left-item">
                   <Link to="/Login" className="link"> 
                        < FaArrowRight/> 
                        <span>Login</span>
                    </Link>    
                </div>

                <div className="Register top-nav-left-item">
                <Link to="/Register" className="link">
                    < FaPen/> 
                    <span>CreateAccount</span>
                </Link>   
                </div>
            </div>
            <div className="top-nav-right">
                <FaCartArrowDown/>
                <span>0</span>
            </div>
        
        </div>
    )
}
export default Topbar;