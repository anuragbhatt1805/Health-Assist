import React from 'react'
import Login from '../components/LoginSignUp/Login'
import SignUp from '../components/LoginSignUp/SignUp'
// import { BrowserRouter,Routes, Route} from 'react-router-dom'
import React, { useState } from 'react';

   
function LoginSignup() {
    const [isLogin, setIsLogin] = useState(true);

  const switchToSignup = () => {
    setIsLogin(false);
  };

  const switchToLogin = () => {
    setIsLogin(true);
  };

  return (
    <div>
       
        <div className="login-signup-container">
        {isLogin ? (
          <Login switchToSignup={switchToSignup} />
        ) : (
          <SignUp switchToLogin={switchToLogin} />
        )}
      </div>
        
    </div>
  )
}

export default LoginSignup