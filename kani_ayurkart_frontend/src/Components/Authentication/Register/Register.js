import React, { useState } from 'react';
import Header from '../../Header/Header';
import Topbar from '../../Topbar/Topbar';
import Navbar from '../../Navbar/Navbar';
import axios from 'axios';
import './Register.css';
 import { useNavigate } from 'react-router-dom';

function Register(){

     let navigate =useNavigate()
    const [user, setUser] = useState({
        firstName:'',
        lastName:'',
        emailId:'',
        password:''

    });
    const {firstName, lastName, emailId, password} = user;

    const onInputChange= (e)=>{
        setUser({...user, [e.target.name]:e.target.value})
    }

     const onSubmit= async (e) =>{
        e.preventDefault();
        console.log(user);
        await axios.post("http://localhost:9097/CreateUser/createUserDtls", user)
        .then((response) => console.log(response))
        .catch((err)=>console.log(err));
         navigate("/Login");
    }
 return (
    <>
        <Topbar/>
        <Header/>
     <Navbar/>
        <h2>
            Create Your Account
        </h2>
        <form onSubmit={(e)=>onSubmit(e)}>
            <input type="text"
            className='mb-3 p-1'
             placeholder='First Name'
              onChange={(e)=>onInputChange(e)} 
              name="firstName" 
              value={firstName}></input><br/>

            <input type="text"
            className='mb-3 p-1'
             placeholder='Last Name' 
             onChange={(e)=>onInputChange(e)}
             name="lastName"
             value={lastName}></input><br/>

            <input type="email"
            className='mb-3 p-1'
             placeholder='Email' 
             onChange={(e)=>onInputChange(e)}
             name="emailId"
             value={emailId}></input><br/>

            <input type="password"
            className='mb-3 p-1' 
            placeholder='Password' 
            onChange={(e)=>onInputChange(e)}
            name="password"
            value={password}></input>
            <button type="submit" className='submit-btn'>Submit</button>
        </form>
        
    </>
 ) ;  
}
export default Register;