import React from "react";
import Header from "../../Header/Header";
import Navbar from "../../Navbar/Navbar";
import Topbar from "../../Topbar/Topbar";
function ForgotPassword(){
    return(
        <>
        <Topbar/>
        <Header/>
        <Navbar/>
        <div>
            <h2>Forgot Password</h2>
            <form>
                <input type="Email" 
                placeholder="Email"
                className='mb-3 p-1' >
                </input>
                <button type="submit" className='submit-btn'>Submit</button>
            </form>
        </div>
        </>
    )
}
export default ForgotPassword;