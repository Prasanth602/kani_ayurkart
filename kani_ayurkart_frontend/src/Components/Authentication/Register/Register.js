import React, { useState } from 'react';
import Header from '../../Header/Header';
import Topbar from '../../Topbar/Topbar';
import Navbar from '../../Navbar/Navbar';
import axios from 'axios';
import './Register.css';
// import { useNavigate } from 'react-router-dom';

function Register(){

    // let navigate =useNavigate()
    const [user, setUser] = useState({
        firstname:'',
        lastname:'',
        email:'',
        password:''

    });
    const {firstname, lastname, email, password} = user;

    const onInputChange= (e)=>{
        setUser({...user, [e.target.name]:e.target.value})
    }

     const onSubmit= async (e) =>{
        e.preventDefault();
        console.log(user);
        await axios.post("http://localhost:9097/CreateUser/createUserDtls", user)
        .then((response) => console.log(response))
        .catch((err)=>console.log(err));
        // navigate("/");
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
             placeholder='First Name'
              onChange={(e)=>onInputChange(e)} 
              name="firstname" 
              value={firstname}></input><br/>

            <input type="text"
             placeholder='Last Name' 
             onChange={(e)=>onInputChange(e)}
             name="lastname"
             value={lastname}></input><br/>

            <input type="email"
             placeholder='Email' 
             onChange={(e)=>onInputChange(e)}
             name="email"
             value={email}></input><br/>

            <input type="password" 
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