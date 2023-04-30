
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './Components/Layout/Layout';
import Login from './Components/Authentication/Login/Login'
import Register from './Components/Authentication/Register/Register'
import ForgotPassword from './Components/Authentication/ForgotPassword/ForgotPassword';
import Topbar from './Components/Topbar/Topbar';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import AboutUs from './Components/AboutUs/AboutUs';
import HealthAndNutrionDropdown from './Components/Dropdowns/HealthAndNutrition/HealthAndNutritionDropdown';
import BrandsDropdown from './Components/Dropdowns/BrandsDropdown/BrandsDropdown';
function App() {
  return (
    <>
    <BrowserRouter>
    <Topbar />
    <Header/>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Layout/>}></Route>
        <Route path='Login' element={<Login/>}></Route>
        <Route path='Register' element={<Register/>}></Route>
        <Route path='ForgotPassword' element={<ForgotPassword/>}></Route>
        <Route path='AboutUs' element={<AboutUs/>}></Route>
      </Routes>
      <Footer/>
    </BrowserRouter> 
    </>
  );
}

export default App;
