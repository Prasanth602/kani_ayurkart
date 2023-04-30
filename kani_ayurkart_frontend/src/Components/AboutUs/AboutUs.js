import axios from "axios";
import React, { useEffect, useState } from "react";
import './AboutUs.css';
import CryptoJS from "crypto-js";

export default function AboutUs(){
    
    const [about, setAbout] = useState("");
  //  const [decrptedData, setDecrptedData] = useState("");

    

    useEffect(()=>{
        axios.get("http://localhost:9092/CreateUser/AboutUS")
        .then(response => {setAbout(response.data)
            // var rawData = CryptoJS.enc.Base64.parse(about);
            // var key = CryptoJS.enc.Utf8.parse("21323423345456575677");
            // var iv = CryptoJS.enc.Utf8.parse("abcdefggijklmnop");

            // var plaintextData = CryptoJS.AES.decrypt(
            //     { ciphertext: rawData },
            //     key,
            //     { iv: iv });
            // var plaintext = plaintextData.toString(CryptoJS.enc.Utf8);
        //   const bytes = CryptoJS.AES.decrypt(about, "21323423345456575677");
        // const data = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
        //setDecrptedData(data);
           // setDecrptedData(about)
        
    })
    },[])
    // console.log(about)
    // console.log(decrptedData);
    return(
        <div className="about-us">
            <button>Download</button>
            <p>{about}</p>

        </div>
    )
}