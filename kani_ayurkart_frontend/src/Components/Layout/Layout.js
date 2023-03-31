 import React from "react";
 import Topbar from '../Topbar/Topbar'
 import Header from '../Header/Header'
 import Navbar from '../Navbar/Navbar'
import ImageSlider from "../Imagesider/ImageSlider";
import Description from "../Description/Description";
 function Layout (){
    return(
        <>
            <Topbar />
            <Header/>
            <Navbar/>
            <ImageSlider/>
            <Description/>
        </>
    )
 }

 export default Layout;