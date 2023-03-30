
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './Components/Layout/Layout';
import Login from './Components/Authentication/Login/Login'
import Register from './Components/Authentication/Register/Register'
function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}></Route>
        <Route path='Login' element={<Login/>}></Route>
        <Route path='Register' element={<Register/>}></Route>
      </Routes>
    </BrowserRouter> 
    </>
  );
}

export default App;
