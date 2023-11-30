// import logo from './logo.svg';
import './App.css';
import NavBar from './components/navb/NavBar';
import Login from './components/LoginSignUp/Login';
import SignUp from './components/LoginSignUp/SignUp';
import Home from './Pages/Home';
import Appointment from './Pages/Appointment';
import { BrowserRouter,Routes, Route} from 'react-router-dom'



import React, { useState } from 'react';

function App() {
  
  return (
    <div className="app">
      
      
       <BrowserRouter>
       <NavBar/>
        <Routes>
            <Route index element={<Home/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/signup' element={<SignUp/>}/>
            <Route path='/appointment' element={<Appointment/>}/>
        </Routes>
        </BrowserRouter>
      {/* <NavBar/>
      <Home/> */}
      
      
    </div>
    //  <>
    // <BrowserRouter>
    //      <Routes>
    //         <Route path="/" element={<Home/>}/>
    //           <Route path="/about" element={<About/>}/>
    //      </Routes>
    //      </BrowserRouter>

    //  </>
  );

}

export default App;
