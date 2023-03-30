import React from 'react';
import {Link} from 'react-router-dom'
import Header from '../../Header/Header';
import Navbar from '../../Navbar/Navbar';
import Topbar from '../../Topbar/Topbar';
import '../Register/Register.css'
import './Login.css';

function Login(){
     return (
        <>
        <Topbar/>
        <Header/>
        <Navbar/>
        <h2>Login</h2>
        <form>
            <input type="email" placeholder="Email">
            </input>
            <input type="password" placeholder="Password">

            </input>
            <button type="submit" className="submit-btn">
                    Login
            </button>
        </form>
        <p className="forgot-password">
            <Link to="/">
                Forgot Password
            </Link>
            <span className="or">Or</span>
            <Link to="/Register">
                Create Your Account
            </Link>
        </p>
        </>
    )
    }
export default Login;