import React from 'react';
import {Link} from 'react-router-dom'
import '../Register/Register.css'
import './Login.css';

function Login(){
     return (
        <>
        <h2>Login</h2>
        <form>
            <input type="email" 
            placeholder="Email"
            className='mb-3 p-1' >
            </input>
            <input type="password" 
            placeholder="Password"
            className='mb-3 p-1' >

            </input>
            <button type="submit"
             className="submit-btn mb-2">
                    Login
            </button>
        </form>
        <p className="forgot-password">
            <Link to="/ForgotPassword">
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