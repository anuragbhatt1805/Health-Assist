// import logo from './logo.svg';
import './App.css';
import NavBar from './components/navb/NavBar';
import Login from './components/LoginSignUp/Login';
import SignUp from './components/LoginSignUp/SignUp';
import Home from './Pages/Home';
<<<<<<< HEAD
import Appointment from './Pages/Appointment';
import Profile from './Pages/Profile';
=======
import Faq from './Pages/Faq';
>>>>>>> 7c07f3a (Intital DevProfile Card and FAQ pages)
import { BrowserRouter,Routes, Route} from 'react-router-dom'



import React, { useState } from 'react';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  return (
    <div className="app">
      
      
       <BrowserRouter>
       <NavBar/>
        <Routes>
            <Route index element={<Home/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/signup' element={<SignUp/>}/>
<<<<<<< HEAD
            <Route path='/appointment' element={<Appointment/>}/>
            <Route path='/profile' element={<Profile />} />
=======
            <Route path='/faq' element={<Faq/>}/>
>>>>>>> 7c07f3a (Intital DevProfile Card and FAQ pages)
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
