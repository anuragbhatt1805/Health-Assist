// import logo from './logo.svg';
import './App.css';
import NavBar from './components/navb/NavBar';
import Login from './components/LoginSignUp/Login';
import SignUp from './components/LoginSignUp/SignUp';
import Home from './Pages/Home';
import { BrowserRouter,Routes, Route} from 'react-router-dom'



import React, { useState } from 'react';

function App() {
  
  return (
    <div className="app">
      
       <BrowserRouter>
        <Routes>
            <Route index element={<Home/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/signup' element={<SignUp/>}/>
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