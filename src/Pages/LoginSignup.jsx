import React, { useState } from 'react';
import Login from '../Components/Login/Login';
import SignUp from '../Components/SignUp/SignUp';

export const LoginSignup = ({ onLogin }) => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div>
      {isLogin ? (
        <Login toggleForm={toggleForm} onLogin={onLogin} /> // Pass onLogin to Login
      ) : (
        <SignUp toggleForm={toggleForm} />
      )}
    </div>
  );
};

export default LoginSignup;
