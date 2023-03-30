 import React from "react";
 import Topbar from '../Topbar/Topbar'
 import Header from '../Header/Header'
 import Navbar from '../Navbar/Navbar'
import ImageSlider from "../Imagesider/ImageSlider";
 function Layout (){
    return(
        <>
            <Topbar />
            <Header/>
            <Navbar/>
            <ImageSlider/>
        </>
    )
 }

 export default Layout;